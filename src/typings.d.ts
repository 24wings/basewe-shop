/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface CloudinaryImage {
  _id?: string;
  url?: string;
  width?: number;
  secure_url?: string;
  createDt: Date;
}

interface BangweiProductGroup {
  _id?: string;
  summary?: String;
  groupName?: string;
  createDt?: Date;
}
interface BangweiProduct {
  _id?: string;
  active?: boolean;
  discount?: number;
  group?: string;
  price?: number;
  minScore?: number;
  name?: string;
  summary?: string;
  unit?: string;
  images?: CloudinaryImage[];
}

interface ShopUser {
  _id?: string;
  nickname?: string; // 微信昵称
  Nickname?: string; // 昵称
  CreateDt?: string;
  headimgurl?: string;
  Sex: number;
  birthDay: Date;
}

interface ShopUserReciveAddress {
  _id?: string;
  name?: string;
  phone?: string;
  region?: string;
  city?: string;
  area?: string;
  detailAddress?: string;
  isDefault?: boolean;
  publishRequire?: string;
  publishContent?: string;
  shopuser?: string;
  publishDt?: Date; teachNum: number;
}
interface BangweiOrder {
  _id?: string;
  product?: any;
  num?: number;
  reductions?: any[];
  user?: any;
  createDt?: Date;
  state?: any;
  payDate?: Date;
  useTickets?: any[];
  totalPrice?: number;
  truePayMoneyNumber?: number;
  reciveAddress?: ShopUserReciveAddress;
  sendDt?: Date;
  reciveDt?: Date;
}
interface BangweiReduction {
  title: string;
  value: number;
  everyUser: boolean;
  createDt: Date;
  active: boolean;
  icon: CloudinaryImage;
}

interface User {
  name: string;
  age: 23;
  area?: string;
  _id?: string;
  checked?: boolean;
}
