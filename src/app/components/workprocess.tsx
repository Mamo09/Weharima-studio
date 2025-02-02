'use client'

interface Step {
  stepNumber: number;
  title: string;
  description: string;
}

// Define the props for the IntegrationProcess component
interface IntegrationProcessProps {
  title: string;
  description: string;
  steps: Step[];
  demoLink: string;
  supportEmail: string;
}

const IntegrationProcess: React.FC<IntegrationProcessProps> = ({
  title,
  description,
  steps,
  demoLink,
  supportEmail,
}) => {
  return (
    <div className="pt-8 pb-12 lg:pb-[90px] bg-secondary">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-7xl sm:text-center mb-14">
          <h1 className="sm:text-4xl border-b-4 border-primary font-bold">{title}</h1>
          <p className="mt-2 text-lg sm:text-center leading-8 ">
            {description}{' '}
            <a
              className="text-custom-primary font-medium"
              target="_blank"
              href={demoLink}
              rel="noopener noreferrer"
            >
              watch a demonstration here
            </a>{' '}
            or contact our{' '}
            <a className="text-custom-primary font-medium" href={`mailto:${supportEmail}`}>
              support team
            </a>
            .
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.stepNumber}>
              <div className="flex items-center text-sm font-semibold leading-6 ">
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Step {step.stepNumber}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </div>
              <h1 className="mt-6 text-lg font-semibold leading-8 tracking-wide ">{step.title}</h1>
              <p className="mt-1 text-base leading-7  ">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectStages: React.FC = () => {
  const steps: Step[] = [
    {
      stepNumber: 1,
      title: 'Create an Account:',
      description: 'Get started by registering for an account. No complex onboarding processes.',
    },
    {
      stepNumber: 2,
      title: 'Choose Features:',
      description: 'Select from a variety of features and functionalities tailored to your needs.',
    },
    {
      stepNumber: 3,
      title: 'Customize Settings:',
      description: 'Tailor the platform to your preferences. Define settings, alerts, and integrations.',
    },
    {
      stepNumber: 4,
      title: 'Activate and Explore:',
      description: 'Activate your account and start exploring the possibilities of our platform.',
    },
  ];

  return (
    <div>
      <IntegrationProcess
        title="Effortless Integration"
        description="Experience seamless integration with our platform. If you encounter any issues with the integration process,"
        steps={steps}
        demoLink="https://app.example-service.io/demo"
        supportEmail="support@example-service.io"
      />
    </div>
  );
};

export default ProjectStages