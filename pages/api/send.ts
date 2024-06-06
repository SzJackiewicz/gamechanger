import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/elements/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Formularz kontaktowy <onboarding@resend.dev>',
    to: ['kontakt@f-gc.pl'],
    subject: req.body.subject || 'Brak tematu - wiadomość z formularza',
    react: EmailTemplate({ name: req.body.name, email: req.body.email, message: req.body.message }),
    text: req.body.message,
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
}
