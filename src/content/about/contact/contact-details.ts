import type { ContactDetailId, ContactDetailValue } from "./types";

export const contactDetails = {
  email: {
    lines: ["market@easternpurity.com"],
  },
  phone: {
    lines: ["+81 - 090-9867-4333"],
  },
  address: {
    language: "ja",
    lines: [
      "〒589-0005",
      "大阪府大阪峡山市峡山5丁目2252番地の3（201室）",
    ],
  },
} as const satisfies Record<ContactDetailId, ContactDetailValue>;
