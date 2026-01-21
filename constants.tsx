
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Quần Tây Linen Thiết Kế',
    price: 145.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRsXyCX2k5fUREIhbkqJNUmEYc-qviYlYA6Qh57drDQtwOiHuwZesVW6nRkNwe_v4Ci1kJjy5WtijBKeQgj17KusZm-b5Xu8OP59gk-BrrJX0H2CXPBp6T6Yx5r3CJokZ8cG2U8hFFAU5AY57kGqTw0aCxgBI4gzdP0T6mMlqUTySNN2wK4df4zIC1jvE493P9hbOVxFXsnWaEcmjAtc1miv1xM22__L1whvSF4vbtt2F9IPTmZfc4ydesq8Tv_rS-Rf6itoY3wHA4',
    category: 'Quần Tây',
    description: 'Được thiết kế với kiểu dáng kiến trúc hiện đại, mẫu quần này được may từ vải linen Ý cao cấp. Form dáng thoải mái nhưng vẫn giữ được sự chỉn chu, cho phép cử động dễ dàng.',
    variants: ['S', 'M', 'L', 'XL'],
    colors: ['Cát', 'Than', 'Rêu'],
    reviewsCount: 124,
    rating: 4.8,
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Quần Linen May Đo',
    price: 120.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtCmyKIAVN0K1pOEcMdUSu-UhnN6jWV-NH3DYbkm7RU3ze3T-m8PmP0AC2JTuiMhzgXNvkz8ncnF-On3sLvBSL6Xi_obTYj3spVnZgHzm4tc4faNtll6FeKjZk79eCST8OY-JZRHDLHm57EJyUHeo3er3wDRcK5s1cKbu068N1JcRh07AUVwDdf10gV6zEDThgHd0v6AAxpyjlCqGj-9Y3t2dmb9jj-cJMLzh-KozgJ_wlICg_VYIuBDoUS4XMm8XK1E-BWrnKa360',
    category: 'Quần Tây',
    description: 'Phong cách tối giản với các đường cắt tinh tế và bề mặt vải linen hoàn hảo.',
    variants: ['S', 'M', 'L'],
    colors: ['Be', 'Trắng'],
    reviewsCount: 89,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Quần Chinos Hiện Đại',
    price: 85.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxDdN1mdaqBZxMTPYifRjnmCOhujL5u7VFIqwbPcQbNExjLB_XsUngMnxol2fDJIKfG9adKYZWcOaZCuXi8p6D8HZ86yQAv3yzsKCPKngu-3oCnennRZQ_wsrp2h539d19ldCnlteXswCHv4An36ukqDn0csaBWUx4Z0HBfLiKr3GLZQb19eM34pb62oXjUgQvk3Zjt2geG3q36wh80JjHMkV_5GtEOPN7Vr_3zDdCLEMZGeb4rjEK4F7dOEjBKppTTRkUtU0GjpFl',
    category: 'Quần Short',
    description: 'Quần chinos cắt gọn với phong cách hiện đại. Phù hợp cho trang phục hàng ngày.',
    variants: ['30', '32', '34', '36'],
    colors: ['Xanh Navy', 'Cát', 'Đen'],
    reviewsCount: 56,
    rating: 4.6,
    isNewArrival: true
  },
  {
    id: '4',
    name: 'Quần Short Cargo',
    price: 75.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFCardT7sl28Qo1R96MlRfBf5ET-l1Vatf_sqIMcNYzrFADfo5IQRtSuIEpgDQMpE-JmasCYcB-tE68jzXObhKgq85iMcWOQxFjZmD82Nq6Tmds4BhqeeTfopcLCzhyvsTNuuvTNfAwfjFY0iUZAOKq8cFMfIrrcPeMGEUruI6KEQDFGOYQods-dFoivq4ZSEUiRSQBFFfoPSuEWHRUSyaXmpSWkmWZhX7c31yOxc7pK9cS0dbOtfZzQsbfdFI8yZxZHl8HOpp1f59',
    category: 'Quần Short',
    description: 'Sự tiện dụng kết hợp với thiết kế tối giản trong mẫu quần short cargo cao cấp này.',
    variants: ['S', 'M', 'L'],
    colors: ['Khaki', 'Rêu'],
    reviewsCount: 42,
    rating: 4.5,
    isBestSeller: true
  }
];

export const CATEGORIES = [
  { name: 'Nam', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB4NKhiOKb7OuvrSrTpxUYrEeTF6LLWXWHq-aJ4RUY65jl8AhGOxT_UudM7_h1XEOqXUeysLD0dvF19c_kdV39RLDLeuUCgE_zCW2Mp0jKOpJlm8foFhbrgzTl8I1n-wmlFBRrT7Dthdhq5-eSGQQvYJG6_5W2V1zjnQIMWKFlxdAcVBxVRIKxtL1yYfpB_l9feehHG-oZkQgBtCuH9Od-ij_W0jZczBt0wgDjpOApsGnFEcJshX46blqXq61S45OJ15oez3DUeMdU' },
  { name: 'Nữ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvVQI3tgN00NbJQPmkBDY5pAYeUD5PQPZLLiuQiPcpmgN4upa3lPBmhQ1E57rk5e1Trrbqz4dHN8tEhHsvXmpyLfDLBDv1CAflWnV9uvf3PYi98SIN1oB9mwJBJdpPrOPIhB1x5lEhm1UJ1kA294_r1u3WsgDDuxbymB56FIOMIowm9QA7X5b9JA-5QWdQZRjVK-HvKZViIQIo2pJ7elIah3eSMrO14fb3ywVuoxBNSztYjdJ__KN2LDEf3GfAHE1pc00jeXTpwKMy' },
  { name: 'Quần Tây', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApyPds08cwwbSHn3T78efDQ8re8xz_pBRGC9qMAziQ0XmgQ1LKR8nfqfzCnQnZo9gg0GuIpYIB3E0vDLdz_1QxGlVy5CK9Nff-M56j_Qf3BKditHt2EBKzO7q3aB1JQa14qTTNYlVA8klfniuwbUc7kghNiw8izGaYg8Wi88LXRByrwxrjVDRmQvnOljzK4JTkBp6pxFMPAXW5kpjU0V6G3XpMv_qK7ZKnBAHXzg4_CCul_YZ6wB1ZB9EbjWqMe7EnW9obd-yTZxlm' },
  { name: 'Quần Short', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6SvecrmH8B12Jgf3a0gy-RkpvRvRgS-eChuFooP0f0567Pw5EJ__u3crv2oNoQZhclAe4RGEVP7X3GoHKBnGy7LEypXFMwf6liYJ_Nnd0g0NVsIs96eW6EsMX6czioqC8njA0PFRbcPeTZFSVj_Muk3SMiuPTngKr9A2UhIKwz3F4YqnYOYOH9gGGuCMEGblL92kgh0HuqSJxxnfLfvlVMwNM1aTtVXsUsjQpppeF0763r-4YwdbG7iDe9u0jE3i7bo8UyGgxKyHt' }
];
