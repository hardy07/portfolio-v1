const formattedReturn = (body, statusCode) => {
    return {
        statusCode: statusCode ? statusCode : 200,
        body: JSON.stringify(body),
    };
};

export const handler = async (event, context) => {
    const body = JSON.parse(event.body);

    if (!body.captcha) {
        return formattedReturn(
            { success: false, message: "Captcha is required" },
            400
        );
    }

    const secretKey = process.env.RECAPTCHA_SECRET;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${body.captcha}`;

    try {
        const captchaResponse = await fetch(verificationURL, {
            method: "POST",
        });
        const captchaData = await captchaResponse.json();

        if (!captchaData.success) {
            return formattedReturn(
                { success: false, message: "Captcha Invalid" },
                400
            );
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        await fetch(process.env.DISCORD_WEBHOOK, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                username: "Content Report",
                content: null,
                embeds: [
                    {
                        title: "**Contact Message**",
                        description: `${body.message}`,
                        color: 5814783,
                        fields: [
                            {
                                name: "Name",
                                value: `> ${body.name}`,
                                inline: true,
                            },
                            {
                                name: "EMAIL",
                                value: `> ${body.email}`,
                                inline: true,
                            },
                        ],
                    },
                ],
                attachments: [],
            }),
        });

        return formattedReturn({
            success: true,
            message: "Successfully reported",
        });
    } catch (error) {
        return formattedReturn(
            { success: false, message: "Internal Server Error" },
            500
        );
    }
};
