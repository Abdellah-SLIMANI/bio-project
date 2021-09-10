
import { Mailer } from 'nodemailer-react'

const transport = {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    }
  }

  export const orderEmail = (email) => ({
    subject: `👋 Ordering The Book ${email.name}`,
    body: (`
      <div>
        <p>Order From ${email.name} ${email.first_name}!</p>
        <p>Hope you'll enjoy the package!</p>
      </div>`
    ),
    from: email.email
  })

export const mailer = Mailer(
  { transport, defaults },
  { orderEmail }
)
