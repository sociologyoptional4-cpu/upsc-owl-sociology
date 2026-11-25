import type { CollectionConfig } from 'payload'

import { isAdmin } from '@/access/roles'

export const Subscriptions: CollectionConfig = {
  slug: 'subscriptions',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'phone', 'accessCode', 'status', 'amountInr', 'expiresAt'],
    group: 'Admin',
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'email', type: 'email', required: true, index: true },
    { name: 'phone', type: 'text', index: true },
    { name: 'name', type: 'text' },
    { name: 'accessCode', type: 'text', required: true, unique: true, index: true },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      index: true,
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Pending', value: 'pending' },
        { label: 'Expired', value: 'expired' },
        { label: 'Revoked', value: 'revoked' },
      ],
    },
    { name: 'planCode', type: 'text', required: true, defaultValue: 'pro_annual' },
    { name: 'amountInr', type: 'number', required: true, defaultValue: 399 },
    { name: 'originalPriceInr', type: 'number', defaultValue: 999 },
    { name: 'currency', type: 'text', defaultValue: 'INR' },
    {
      name: 'paymentMethod',
      type: 'select',
      defaultValue: 'razorpay_checkout',
      options: [
        { label: 'Razorpay Checkout', value: 'razorpay_checkout' },
        { label: 'Razorpay UPI QR', value: 'razorpay_qr' },
        { label: 'Manual Admin', value: 'manual_admin' },
      ],
    },
    { name: 'razorpayOrderId', type: 'text', index: true },
    { name: 'razorpayPaymentId', type: 'text', unique: true, index: true },
    { name: 'razorpayQrId', type: 'text', index: true },
    { name: 'startsAt', type: 'date', required: true },
    { name: 'expiresAt', type: 'date', required: true, index: true },
    { name: 'notes', type: 'textarea' },
  ],
}
