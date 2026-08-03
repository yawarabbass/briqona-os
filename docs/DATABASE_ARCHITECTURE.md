# BRIQONA OS
## Database & Access Architecture

# Core Tables

Platform

Plans

Features

Industries

Modules

Companies

CompanyModules

Users

Roles

Permissions

RolePermissions

UserPermissions

Departments

Branches

Teams

AuditLogs

Notifications

Subscriptions

Invoices

Payments

APIKeys

Settings

AIProviders

Integrations

Webhooks

Storage

Media

Sessions

ActivityLogs

---

# Relationship

Platform
   │
Plans
   │
Companies
   │
Industries
   │
Company Modules
   │
Roles
   │
Permissions
   │
Users

---

# Permission Flow

Master
 ↓
Plan
 ↓
Company
 ↓
Industry
 ↓
Module
 ↓
Role
 ↓
Permission
 ↓
User

---

# Authentication

Login

JWT

Refresh Token

Session

2FA Ready

Social Login Ready

---

# Company Isolation

Every company has its own data.

Users can never access another company's data.

Every API request validates Company ID.

---

# Module Access

Module Enabled?

YES → Continue

NO → Block Access

---

# Feature Access

Permission Exists?

YES → Continue

NO → Block

---

# API Rules

Every API validates:

Authentication

Company

Role

Permission

Subscription

Feature

Module

Rate Limit

---

# Future Ready

Multi Language

Multi Currency

Multi Timezone

Marketplace

Plugin System

Developer API

AI Engine

White Label

Multiple Branches

Unlimited Companies
