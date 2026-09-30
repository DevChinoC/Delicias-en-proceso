import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { WhatsAppIcon, FacebookIcon, MailIcon } from '../components/ui/SocialIcons'

const contactItems = [
  {
    title: 'WhatsApp',
    desc: 'La forma más rápida de contactarnos. Respondemos en minutos.',
    href: siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}` : null,
    label: siteConfig.whatsapp ? `+${siteConfig.whatsapp}` : 'Próximamente',
    external: true,
    icon: WhatsAppIcon,
  },
  {
    title: 'Facebook',
    desc: 'Síguenos y ve nuestros trabajos más recientes.',
    href: siteConfig.facebook,
    label: 'Visitar Facebook',
    external: true,
    icon: FacebookIcon,
  },
  {
    title: 'Correo',
    desc: 'Para pedidos grandes o cotizaciones detalladas.',
    href: siteConfig.email ? `mailto:${siteConfig.email}` : null,
    label: siteConfig.email || 'Próximamente',
    external: false,
    icon: MailIcon,
  },
]

function Contact() {
  return (
    <main>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #faebd6 0%, #f5d5d5 100%)',
          padding: '8rem 1.5rem 4rem',
          textAlign: 'center',
        }}
      >
        <span className="section-label">Hablemos</span>
        <h1
          className="section-title"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', margin: '.5rem auto 1rem' }}
        >
          Contacto
        </h1>
        <p
          style={{
            color: 'var(--color-text-muted)',
            maxWidth: '460px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          ¿Tienes un pedido en mente? Cuéntanos tu idea y lo hacemos
          realidad. Atendemos pedidos personalizados.
        </p>
      </div>

      {/* Contact cards */}
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
            {contactItems.map((item) => {
              const IconComp = item.icon
              return (
                <div key={item.title} className="contact-card">
                  <div className="contact-icon" style={{ color: 'var(--color-rose)' }}>
                    <IconComp size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, color: 'var(--color-mocha)', marginBottom: '.25rem' }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '.875rem', color: 'var(--color-text-muted)', marginBottom: '.5rem' }}>
                      {item.desc}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', color: 'var(--color-rose)', fontWeight: 500, fontSize: '.9rem' }}
                      >
                        <span>{item.label}</span>
                        <span>→</span>
                      </a>
                    ) : (
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '.9rem' }}>
                        {item.label}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA strip */}
          <div
            style={{
              background: 'var(--color-rose)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '.75rem' }}>
              ¿Lista para pedir?
            </p>
            <p style={{ opacity: .85, marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Escríbenos y te atendemos con gusto. Sin costo de cotización.
            </p>
            {siteConfig.whatsapp ? (
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  background: '#fff',
                  color: 'var(--color-rose)',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-full)',
                  padding: '.75rem 2rem',
                  fontSize: '.9rem',
                }}
              >
                <WhatsAppIcon size={20} />
                <span>Escribir por WhatsApp</span>
              </a>
            ) : (
              <Link
                to="/productos"
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  color: 'var(--color-rose)',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-full)',
                  padding: '.75rem 2rem',
                  fontSize: '.9rem',
                }}
              >
                Ver catálogo
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact