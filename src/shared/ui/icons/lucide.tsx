import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function baseProps(props: IconProps) {
  const { size = 18, ...rest } = props
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': rest['aria-label'] ? undefined : true,
    ...rest,
  }
}

export function Pencil(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

export function Trash2(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  )
}

export function PanelLeftClose(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16" />
      <path d="m16 10-2 2 2 2" />
    </svg>
  )
}

export function PanelLeftOpen(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16" />
      <path d="m14 10 2 2-2 2" />
    </svg>
  )
}

export function Check(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function X(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

export function ListTodo(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M3 6h14" />
      <path d="M3 12h14" />
      <path d="M3 18h14" />
      <path d="M19 7l1 1 2-2" />
      <path d="M19 13l1 1 2-2" />
    </svg>
  )
}

export function Circle(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

export function CheckCircle2(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M16 10l-5 5-2-2" />
    </svg>
  )
}

export function Plus(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

export function CircleHelp(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

export function Github(props: IconProps) {
  return (
    <svg {...baseProps(props)} viewBox="10 2 14 20">
      <path d="M15 22v-3.3c0-.9.3-1.6.8-2-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .5.4.9 1.2.9 2.4V22" />
    </svg>
  )
}

export function Telegram(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M21 5L10 16" />
      <path d="M21 5l-7 18-4-8-8-4 19-6Z" />
    </svg>
  )
}

export function Briefcase(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M10 2h4" />
      <path d="M10 2v2h4V2" />
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 12h18" />
    </svg>
  )
}

export function Linkedin(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-3Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Link2(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M9 17H7a5 5 0 0 1 0-10h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <path d="M8 12h8" />
    </svg>
  )
}
