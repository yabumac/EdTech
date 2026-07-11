import './globals.css';

export const metadata = {
  title: 'EdTech Hub ET | Transforming Education Through Technology',
  description: 'A pioneering social enterprise transforming education and training through innovative digital technologies in Ethiopia.',
  keywords: 'EdTech, Education Technology, Ethiopia, Digital Learning, Teacher Training, Interactive Courses',
  openGraph: {
    title: 'EdTech Hub ET',
    description: 'Transforming education and training through innovative digital technologies.',
    url: 'https://www.edtechet.com',
    siteName: 'EdTech Hub ET',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
