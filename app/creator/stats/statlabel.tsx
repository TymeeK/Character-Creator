'use client'
import React, { ChangeEvent } from 'react'
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const formSchema = z.object({
  element: z.string().min(0).max(2),
})

export const StatLabel: React.FC<Props> = ({
  element,
  stats,
  isAssigned,
  onChange,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      element: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <div>
      {isAssigned && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} name='form'>
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
            <Button type='submit'>-</Button>
            <Button type='submit'>+</Button>
          </form>
        </Form>
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
