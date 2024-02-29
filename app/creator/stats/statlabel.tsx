'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'

type Props = {
  element: string
  stats: number
  isAssigned: boolean
  changeStats?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const formSchema = z.object({
  element: z.string().min(0).max(2),
})

export const StatLabel: React.FC<Props> = ({
  element,
  stats,
  isAssigned,
  changeStats,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      element: '',
    },
  })
  const onSubmit = () => {
    console.log('Hello')
  }

  return (
    <div>
      {isAssigned && (
        <>
          <Form {...form}>
            <form onSubmit={onSubmit} data-testid='test-id'>
              <FormField
                control={form.control}
                name='element'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{element}: </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`${stats}`}
                        {...field}
                        disabled
                        name={element}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                onClick={changeStats}
                name='decrement'
                data-testid='decrement'
              >
                -
              </Button>
              <Button
                onClick={changeStats}
                name='increment'
                data-testid='increment'
              >
                +
              </Button>
            </form>
          </Form>
        </>
      )}
      {!isAssigned && (
        <>
          <Label htmlFor={element}>{element}: </Label>
          <Label>{stats}</Label>
        </>
      )}
    </div>
  )
}
