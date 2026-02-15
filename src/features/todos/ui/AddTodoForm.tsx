import { Button, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { Plus } from '@/shared/ui/icons/lucide'
import s from './AddTodoForm.module.scss'

interface AddTodoFormValues {
  title: string
}

interface AddTodoFormProps {
  onAdd: (title: string) => void
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const { handleSubmit, control, reset, watch, setFocus } =
    useForm<AddTodoFormValues>({
      defaultValues: { title: '' },
      mode: 'onChange',
    })

  useEffect(() => {
    setFocus('title')
  }, [setFocus])

  const title = watch('title')
  const canSubmit = Boolean(title?.trim())

  const onSubmit = (values: AddTodoFormValues) => {
    const trimmed = values.title.trim()
    if (!trimmed) return
    onAdd(trimmed)
    reset({ title: '' })
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            autoFocus
            size="large"
            placeholder="Добавить задачу"
            aria-label="Добавить задачу"
            className={s.input}
            suffix={
              <Button
                type="primary"
                htmlType="submit"
                shape="circle"
                className={s.submit}
                aria-label="Добавить задачу"
                title="Добавить задачу"
                icon={<Plus />}
                disabled={!canSubmit}
              />
            }
          />
        )}
      />
    </form>
  )
}
