
import * as React from 'react';
import { 
  Body, 
  Button, 
  Container, 
  Head, 
  Heading, 
  Html, 
  Link, 
  Preview, 
  Section, 
  Text 
} from 'npm:@react-email/components@0.0.22';

interface MagicLinkEmailProps {
  name?: string;
  downloadLink: string;
  requestType?: string;
}

export const MagicLinkEmail: React.FC<MagicLinkEmailProps> = ({ 
  name = 'there',
  downloadLink,
  requestType
}) => {
  // Set button text based on request type
  let buttonText = 'Access Dashboard';
  let headingText = 'Access Your Dashboard';
  
  if (requestType === 'guide') {
    buttonText = 'Access Your Free Guide';
    headingText = 'Your 3D Printing Guide is Ready!';
  } else if (requestType === 'commercial_license') {
    buttonText = 'Access Your Commercial License';
    headingText = 'Your Commercial License Access';
  }

  return (
    <Html>
      <Head />
      <Preview>{headingText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{headingText}</Heading>
          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Thank you for signing up! Click the button below to access your dashboard:
          </Text>
          <Section style={btnContainer}>
            <Button
              style={button}
              href={downloadLink}
            >
              {buttonText}
            </Button>
          </Section>
          <Text style={paragraph}>
            If the button doesn't work, you can also copy and paste this URL into your browser:
          </Text>
          <Text style={code}>
            {downloadLink}
          </Text>
          <Text style={footer}>
            © 2025 3D Printing Blueprint. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const h1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0 20px',
  padding: '0',
  color: '#333',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
  color: '#555',
};

const btnContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#5469d4',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 16px',
};

const code = {
  backgroundColor: '#f4f4f4',
  borderRadius: '4px',
  color: '#333',
  display: 'block',
  fontSize: '14px',
  margin: '16px 0',
  padding: '12px 16px',
  wordBreak: 'break-all' as const,
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginTop: '48px',
};

export default MagicLinkEmail;
