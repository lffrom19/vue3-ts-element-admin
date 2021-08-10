import { ref } from "vue";

interface User {
  account: string;
  password: string;
}

export const loginUser = ref<User>({
  account: "",
  password: "",
});

interface Rules {
  account: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: ({
    required: boolean;
    message: string;
    trigger: string;
    min?: undefined;
    max?: undefined;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
    required?: undefined;
  })[];
}

// 校验规则
export const rules = ref<Rules>({
  account: [
    {
      type: "email",
      message: "用户名不正确...",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码为必填项...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "密码长度必须在6-30之间...",
      trigger: "blur",
    },
  ],
});