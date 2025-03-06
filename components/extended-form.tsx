'use client'

import {
  BlocksIcon,
  BoxIcon,
  BoxesIcon,
  CloudIcon,
  Code2Icon,
  GlobeIcon,
  LayersIcon,
  PencilIcon,
  ServerIcon,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import MultiStepForm, { type FormStep } from '@/components/ui/multi-step-form'
import { Switch } from '@/components/ui/switch'

const formSteps: FormStep[] = [
  {
    level: 1,
    id: 'help-type',
    title: 'Let Us Help You',
    description: 'How can we assist you today?',
    items: [
      {
        id: 'schedule-call',
        title: 'Schedule a Call',
        description: 'Talk to one of our experts',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240489/ILC-AI/orwtdymurbyia7gc0ovg.png',
        icon: GlobeIcon,
        validNextSteps: ['social-media', 'news-article', 'family-friends', 'google-search', 'others'],
      },
      {
        id: 'ai-help',
        title: 'Let AI Help You',
        description: 'Get recommendations based on your needs',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240490/ILC-AI/j6muwuo1nq5viq8fxfnn.png',
        icon: Code2Icon,
        validNextSteps: ['social-media', 'news-article', 'family-friends', 'google-search', 'others'],
      },
    ],
  },
  {
    level: 2,
    id: 'hear-about',
    title: 'How Did You Hear About ILC?',
    description: 'Select the option that best describes how you found us',
    items: [
      {
        id: 'social-media',
        title: 'Social Media',
        description: 'You found us through social media platforms',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240491/ILC-AI/a1v5pxxpxqyskidkuyss.png',
        icon: BlocksIcon,
        validNextSteps: ['student', 'professor', 'professional', 'others'],
      },
      {
        id: 'news-article',
        title: 'News Article',
        description: 'You found us through a news article or blog post',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240490/ILC-AI/dplw5k2mjpoapdcsba0i.png',
        icon: LayersIcon,
        validNextSteps: ['student', 'professor', 'professional', 'others'],
      },
      {
        id: 'family-friends',
        title: 'Family & Friends',
        description: 'You were referred by family or friends',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240490/ILC-AI/zzdbtx0vfgmdf36ifab5.png',
        icon: BoxesIcon,
        validNextSteps: ['student', 'professor', 'professional', 'others'],
      },
      {
        id: 'google-search',
        title: 'Google Search',
        description: 'You found us through a Google search',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240490/ILC-AI/jcb0egrjdseftxldczhb.png',
        icon: CloudIcon,
        validNextSteps: ['student', 'professor', 'professional', 'others'],
      },
      {
        id: 'others',
        title: 'Others',
        description: 'You found us through other means',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240491/ILC-AI/tiqjhkqimswj4tfriwrc.png',
        icon: ServerIcon,
        validNextSteps: ['student', 'professor', 'professional', 'others'],
      },
    ],
  },
  {
    level: 3,
    id: 'define-you',
    title: 'What Defines You The Best?',
    description: 'Select the option that best describes you',
    items: [
      {
        id: 'student',
        title: 'Student',
        description: 'You are a student looking to upskill',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240490/ILC-AI/ljnwoupsiwsn4v4amuvq.png',
        icon: PencilIcon,
        validNextSteps: ['brain-training', 'college', 'job-opportunities', 'others'],
      },
      {
        id: 'professor',
        title: 'Professor',
        description: 'You are a professor or academic professional',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240491/ILC-AI/fyalhfgiiu3jnukqwsmi.png',
        icon: GlobeIcon,
        validNextSteps: ['brain-training', 'college', 'job-opportunities', 'others'],
      },
      {
        id: 'professional',
        title: 'Professional',
        description: 'You are a working professional',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240491/ILC-AI/wkjbc6vvuplp4pzwi0ep.png',
        icon: BoxIcon,
        validNextSteps: ['brain-training', 'college', 'job-opportunities', 'others'],
      },
      {
        id: 'others',
        title: 'Others',
        description: 'You are someone else',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240492/ILC-AI/xrjykgwe6duvu9td4plq.png',
        icon: CloudIcon,
        validNextSteps: ['brain-training', 'college', 'job-opportunities', 'others'],
      },
    ],
  },
  {
    level: 4,
    id: 'upskill',
    title: 'What Are You Upskilling?',
    description: 'Select the area you are looking to upskill in',
    items: [
      {
        id: 'brain-training',
        title: 'Brain Training',
        description: 'You are looking to improve cognitive skills',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240492/ILC-AI/lqz1pcmuz3zmwcq8ag1r.png',
        icon: Code2Icon,
        validNextSteps: ['engineering', 'finance', 'drones', 'management', 'law', 'ai'],
      },
      {
        id: 'college',
        title: 'College',
        description: 'You are preparing for college or university',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240492/ILC-AI/fjgsadd3cr65hm66bg4u.png',
        icon: GlobeIcon,
        validNextSteps: ['engineering', 'finance', 'drones', 'management', 'law', 'ai'],
      },
      {
        id: 'job-opportunities',
        title: 'Job Opportunities',
        description: 'You are looking for better job opportunities',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240492/ILC-AI/mwa4hohwohdrzbya7sp5.png',
        icon: BoxIcon,
        validNextSteps: ['engineering', 'finance', 'drones', 'management', 'law', 'ai'],
      },
      {
        id: 'others',
        title: 'Others',
        description: 'You are upskilling in other areas',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240489/ILC-AI/knrhc9j139twwqoktt8b.png',
        icon: CloudIcon,
        validNextSteps: ['engineering', 'finance', 'drones', 'management', 'law', 'ai'],
      },
    ],
  },
  {
    level: 5,
    id: 'fields',
    title: 'What Fields Would You Like to Gain Practical Learning In?',
    description: 'Select the fields you are interested in',
    items: [
      {
        id: 'engineering',
        title: 'Engineering',
        description: 'You are interested in engineering',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240489/ILC-AI/ao5xd54lzww1ko41uqfj.png',
        icon: BlocksIcon,
        validNextSteps: ['name', 'email', 'phone'],
      },
      {
        id: 'finance',
        title: 'Finance',
        description: 'You are interested in finance',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240490/ILC-AI/mmvewfpuklyfigdjnlla.png',
        icon: LayersIcon,
        validNextSteps: ['name', 'email', 'phone'],
      },
      {
        id: 'drones',
        title: 'Drones',
        description: 'You are interested in drones',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240490/ILC-AI/vcv5d9ms2k4gy4rg04uq.png',
        icon: BoxesIcon,
        validNextSteps: ['name', 'email', 'phone'],
      },
      {
        id: 'management',
        title: 'Management',
        description: 'You are interested in management',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240491/ILC-AI/oyjgcicud4txeyr1nkcs.png',
        icon: CloudIcon,
        validNextSteps: ['name', 'email', 'phone'],
      },
      {
        id: 'law',
        title: 'Law',
        description: 'You are interested in law',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240491/ILC-AI/szu6nzpov7nr69oc9stc.png',
        icon: ServerIcon,
        validNextSteps: ['name', 'email', 'phone'],
      },
      {
        id: 'ai',
        title: 'AI',
        description: 'You are interested in artificial intelligence',
        image: 'https://res.cloudinary.com/dvztynz8i/image/upload/v1741240492/ILC-AI/n4sxpzlj54ujbul4pthj.png',
        icon: Code2Icon,
        validNextSteps: ['name', 'email', 'phone'],
      },
    ],
  },
]

export default function ExtendedForm() {
  const [isCompact, setIsCompact] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // State to store input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleComplete = (selections: Record<string | number, string>) => {
    if (formRef.current) {
      const isValid = formRef.current.checkValidity();
      if (!isValid) {
        formRef.current.reportValidity();
        return false;
      }
    }
  
    // Prepare the data to be sent
    const selectedItems = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      selections: {
        ...formSteps
          .map((step, index) => {
            const selectedItem = step.items.find((item) => item.id === selections[index]);
            return {
              [step.id]: selectedItem?.id,
            };
          })
          .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
      },
    };
  
    console.log('Data being sent to backend:', JSON.stringify(selectedItems, null, 2));
    // Send data to the backend
    fetch('https://api.ilc.limited/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedItems),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message || 'Failed to submit form');
          });
        }
        return response.json();
      })
      .then((result) => {
        console.log('Form submitted successfully:', result);
        toast('Form Submitted!', {
          description: (
            <pre className="mt-2 p-4 bg-muted rounded-lg overflow-auto">
              <code className="text-sm">{JSON.stringify(selectedItems, null, 2)}</code>
            </pre>
          ),
        });
        return true;
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        toast.error(error.message || 'Failed to submit form. Please try again.');
        return false;
      });
  
    // Return true immediately (assuming the form is valid)
    return true;
  };
  

  return (
    <MultiStepForm
      title={
        <div className="flex items-center justify-between w-full flex-col space-y-4">
          <div className="flex items-center gap-2">
            <Code2Icon className="h-6 w-6 text-[#a47c38]" />
            <span className="font-semibold text-[#a47c38]">ILC</span>
          </div>
          <div className="flex items-center space-x-2">
            <Label className="text-sm font-medium">Default</Label>
            <Switch
              id="compact-mode"
              checked={isCompact}
              onCheckedChange={setIsCompact}
            />
            <Label className="text-sm font-medium">Compact</Label>
          </div>
        </div>
      }
      formSteps={formSteps}
      onComplete={handleComplete}
      variant={isCompact ? 'compact' : 'default'}
      imageClassName="grayscale hover:grayscale-0"
      cardClassName="pb-2"
      finalStep={
        <div className="flex items-center gap-2">
          <span className="font-semibold">Thank you, Our Team Will Soon Reach You!</span>
          <Code2Icon className="h-5 w-5" />
          <span className="font-semibold">ILC</span>
        </div>
      }
    >
      <form ref={formRef} className="space-y-4 p-4 border rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </MultiStepForm>
  )
}