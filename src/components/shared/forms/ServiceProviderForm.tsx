'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import CustomButton from '../CustomButton';

type FormInputs = {
  service: string;
};

export default function ServiceProviderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-4 ">    
      <Input
        type="text"
        placeholder="What service do you provide?"
        {...register('service', { required: 'Service is required' })}
        className="p-5 rounded-[50px] bg-white shadow-md "
      />
      {errors.service && <span className="text-red-500 text-sm">{errors.service.message}</span>}
      
      <CustomButton label='Get Started' textColor="text-white" bgColor="bg-[var(--color-blue-primary)]"/>

    </form>
  );
}
