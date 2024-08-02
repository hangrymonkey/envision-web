import Button from "./ui/button2";
import React from 'react'; // Import React if needed, sometimes required by TypeScript configurations

// Define the style object with proper TypeScript types
type StyleObject = {
  [key: string]: React.CSSProperties;
};

const SignUp: React.FC = () => {
  const styles: StyleObject = {
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column', // Adjust based on media query if necessary
      gap: '40px', // This represents a Tailwind class like gap-10
    },
    heading: {
      fontSize: '48px', // text-4xl in your Tailwind config
      lineHeight: '58px',
      maxWidth: 'medium', // lg:max-w-md in your Tailwind config
      fontFamily: 'Palanquin, sans-serif',
      fontWeight: 'bold',
      color: '#000', // Default color, change if needed
    },
    span: {
      color: '#FF6452', // coral-red from your Tailwind config
    },
    div: {
      maxWidth: '40%', // lg:max-w-[40%] in your Tailwind config
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column', // Adjust based on media query if necessary
      gap: '20px', // Represents a Tailwind class like gap-5
      padding: '10px 2.5px',
      border: '1px solid #6D6D6D', // sm:border and border-slate-gray
      borderRadius: '9999px', // Represents rounded-full
    },
    input: {
      outline: 'none',
      border: 'none',
      flex: 1,
      padding: '10px 15px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'end', // Adjust based on media query if necessary
      alignItems: 'center',
      width: '100%', // max-sm:w-full in your Tailwind config
    }
  };

  return (
    <section id='contact-us' style={styles.section}>
      <h3 style={styles.heading}>
        Sign Up for
        <span style={styles.span}> Updates </span>& Newsletter
      </h3>
      <div style={styles.div}>
        <input type='text' placeholder='subscribe@nike.com' style={styles.input} />
        <div style={styles.buttonContainer}>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default SignUp;