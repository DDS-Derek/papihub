"use client";
import Button from "@/app/components/button/button";
import Input from "@/app/components/hook-form/input";
import FormProvider from "@/app/components/hook-form/form-provider";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export default function Page() {
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('必须填写用户名'),
    password: Yup.string()
    .required('必须填写密码')
    .min(6, '密码是一个大于6位的字符串'),
  });
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const {
    handleSubmit,
    formState: {isSubmitting},
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });
  return (<div>
    <div
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-14">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="PapiHub"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          登入PapiHub
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider className="space-y-6" methods={methods}
                      onSubmit={onSubmit}>
          <Input
              label="用户名"
              name="username" type="text"
          />
          <Input
              label="密码"
              name="password" type="password"
              cornerHint={<a href="#"
                             className="font-semibold text-indigo-600 hover:text-indigo-500">
                忘记密码?
              </a>}
          />
          <div>
            <Button type="submit" className="w-full">登录</Button>
          </div>
        </FormProvider>
      </div>
    </div>
  </div>);
}