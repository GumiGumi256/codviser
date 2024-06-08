// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/about-us', key: 'about', label: 'About Us' },
    { href: '/#services', key: 'services', label: 'Services' },
    { href: '/hosting', key: 'web hosting', label: 'Web Hosting' },
    { href: '/portfolio', key: 'portfolio', label: 'Portfolio' },
    // { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];
  
  export const ourAchievements = [
    { id: 1, number: '30+', subText: 'Satisfied Clients' },
    { id: 2, number: '100+', subText: 'Projects Successfully Delivered' },
    { id: 3, number: '5+', subText: 'Years of Experience' },
    { id: 4, number: '100%', subText: 'Client Satisfaction Rate' },
  ];

export const testimonials = [
  {
    id: 1,
    role: 'Technical Director',
    company: 'RSV Engineering Group LTD',
    text: 'We had a great experience engaging Codviser as they exhibited professionalism in their work and dedication to deliver on time and in an acceptable manner. I highly recommend Codviser for all website needs.',
  },
  {
    id: 2,
    role: 'Accountant/Administrator',
    company: 'RSV Engineering Group LTD',
    text: 'Codviser is professional, reliable, and efficient. Our website was made easy to use and tailored to our line of work. I commend them for a job well done and for their cooperativeness during the design period with the multiple changes required.',
  },
  {
    id: 3,
    role: 'Senior Materials Engineer',
    company: 'RSV Engineering Group LTD',
    text: 'Excellent execution of the task assigned to Codviser and timely delivery of what was expected. They are a focused and reliable service provider.',
  },
  {
    id: 4,
    role: 'Senior Materials Technician',
    company: 'RSV Engineering Group LTD',
    text: 'Codviser is passionate and invested enough time to get the work done. They listened and were ready to adjust to what we wanted during the course of the website design. They should keep up and maintain the good customer care for their clients.',
  },
];


  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Web development',
      icon: '/web.svg',
      variant: 'green',
      description:
        'We create professional websites that are designed to convert and grow your business',
    },
    {
      title: 'app development',
      icon: '/web.svg',
      variant: 'green',
      description:
        "We develop custom mobile and web apps that meet your unique needs and help you achieve your business goals",
    },
    {
      title: 'E-commerce',
      icon: '/cart.svg',
      variant: 'green',
      description:
        'We help you build a successful online store that allows you to sell your products and services to customers all over the world',
    },
    {
      title: 'Web hosting',
      icon: '/hosting.svg',
      variant: 'orange',
      description:
        'Reliable, secure, and scalable web hosting for businesses that want to craft websites that convert and grow',
    },
    {
      title: 'Digital Marketing',
      icon: '/boost.svg',
      variant: 'orange',
      description:
        'We develop and implement comprehensive digital marketing strategies that help you grow your business online',
    },
    {
      title: 'SEO',
      icon: '/boost.svg',
      variant: 'orange',
      description:
        'We help you optimize your website for search engines so you can reach more potential customers and grow your business',
    },
  ];
  
// HOSTING SECTION
export const HOSTING_FEATURES = [
  
  {
    hostingPackage: 'Lite',
    description: 'To get you Up and Running',
    price: 'Ugx 150,000',
    features: [
      'Hosting',
      '24/7 Support',
      
    ]
  },
  {
    hostingPackage: 'premium',
    description: 'Best option for personal use & for your next project.',
    price: 'Ugx 350,000',
    features: [
      'Domain',
      'Email',
      'Premium Hosting Package',
      // 'Free Email',
      '24/7 Support',
      'Automation'
    ]
  },

  {
    hostingPackage: 'Platinum',
    description: 'Tailored to your unique needs, is the ideal choice for personalized websites and  projects of all sizes. this package offers unmatched flexibility and support.',
    price: 'Ugx 600,000',
    features: [
      'Unlimited Bandwidth',
      'Free Domain Name',
      '24/7 Premium Support',
      'Free Email',
      'Hosting',
      'Performance Optimizations',
      'Automated Backups',
      'Scalable Resources for Future Growth',
      '3 Customizable Email Accounts',
      'Free Maintenance',
      'Version Control Integration',
      'Database management'
    ]
}

]


  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        { href: '/#about-us', key: 'about-us', link: 'About us' },
        { href: '/#services', key: 'services', link: 'services' },
        { href: '/contact-us', key: 'contact-us', link: 'Contact Us' },
        { href: '/portfolio', key: 'portfolio', link: 'Portfolio' },
        { href: '/privacy-policy', key: 'privacy-policy', link: 'Privacy Policy' },
        
      ],
    },
    {
      title: 'Our Services',
      links: [
        { href: '#services', key: 'web-development', link: 'Web Development' },
        { href: '#services', key: 'app-development', link: 'App Development' },
        { href: '#services', key: 'ui-ux-design', link: 'UI/UX Design' },
        { href: '#services', key: 'custom-software', link: 'Custom Software' },
        { href: '#services', key: 'digital-marketing', link: 'Digital Marketing' }
    ]
    
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Office', value: '+256770317980' },
      { label: 'Sales', value: 'sales@codviser.com' },
      { label: 'Learn More', value: 'info@codviser.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
    ],
  };