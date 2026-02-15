import { Modal } from 'antd'
import {
  Briefcase,
  Github,
  Link2,
  Linkedin,
  Telegram,
} from '@/shared/ui/icons/lucide'
import s from './HelpModal.module.scss'

type Props = {
  open: boolean
  onClose: () => void
}

export function HelpModal({ open, onClose }: Props) {
  return (
    <Modal title="Привет!" open={open} onCancel={onClose} footer={null}>
      <p>
        Меня зовут Клементьев Артём и я Frontend-разработчик.
        <br />
        Спасибо, что смотрите мое тестовое.
        <br />
        <br />
        Я постарался сделать проект максимально похожим на рабочую среду
        ChatApp: React + TypeScript, Redux Toolkit, React Hook Form, Vite,
        ESLint + Prettier, Ant Design, SCSS Modules.
        <br />
        <br />
        Жду вашей обратной связи и надеюсь на дальнейшее сотрудничество
      </p>

      <p className={s.contactsTitle}>Ниже мои контакты:</p>

      <div className={s.links}>
        <a
          className={s.link}
          href="https://t.me/oklmntv"
          target="_blank"
          rel="noreferrer"
        >
          <Telegram size={20} />
          <span>Telegram</span>
        </a>
        <a
          className={s.link}
          href="https://github.com/klmntv"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          className={s.link}
          href="https://www.linkedin.com/in/artem-klementev-125a81272/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a
          className={s.link}
          href="https://hh.ru/resume/609d0aacff0fa8cf5e0039ed1f374374385235"
          target="_blank"
          rel="noreferrer"
        >
          <Briefcase size={20} />
          <span>hh.ru</span>
        </a>
        <a
          className={s.link}
          href="https://github.com/klmntv/chatapp"
          target="_blank"
          rel="noreferrer"
        >
          <Link2 size={20} />
          <span>Репозиторий проекта</span>
        </a>
      </div>
    </Modal>
  )
}
