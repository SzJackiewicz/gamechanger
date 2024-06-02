import * as React from 'react'

interface EmailTemplateProps {
  name: string
  phone?: string
  subject?: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phone, subject, email, message }) => (
  <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#333', padding: '20px' }}>
    <ul>
      <li>
        <strong>Imię:</strong> {name}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      <li>
        <strong>Telefon:</strong> {phone || 'Brak'}
      </li>
      <li>
        <strong>Temat:</strong> {subject || 'Brak'}
      </li>

      <li>
        <strong>Wiadomość:</strong>
        <p>{message}</p>
      </li>
    </ul>
  </div>
)
