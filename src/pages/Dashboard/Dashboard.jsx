import React, { useState } from "react";

/*
===========================================================
BRIQONA OS — MASTER DASHBOARD
FINAL SINGLE-FILE VERSION
===========================================================

IMPORTANT:
1. No Dashboard.css required.
2. All styling is inside this file.
3. Mobile sidebar is included.
4. Dropdowns are included.
5. Buttons are functional at UI level.
6. Keep this file as the locked dashboard base.

NEXT STEP:
Future dashboard functionality/API work will be added
inside the marked sections below without rebuilding the
entire design.
===========================================================
*/

function Dashboard() {
  /* ======================================================
     STATE
     ====================================================== */

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [periodOpen, setPeriodOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [workforceOpen, setWorkforceOpen] = useState(false);

  const [selectedPeriod, setSelectedPeriod] = useState("This Month");

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  /* ======================================================
     SIDEBAR MENU
     ====================================================== */

  const menuItems = [
    { icon: "⌂", label: "Dashboard", active: true },
    { icon: "✦", label: "AI Command Center", badge: "New" },
    { icon: "♙", label: "AI Workforce", dropdown: true },
    { icon: "◎", label: "Outcome Center" },
    { icon: "▦", label: "Industries Hub", dropdown: true },
    { icon: "♟", label: "CRM" },
    { icon: "$", label: "Finance" },
    { icon: "♙", label: "HR" },
    { icon: "▣", label: "Inventory" },
    { icon: "☑", label: "Projects & Tasks" },
    { icon: "▤", label: "Documents" },
    { icon: "ϟ", label: "Automation" },
    { icon: "▥", label: "Analytics" },
    { icon: "▣", label: "Communication" },
    { icon: "◉", label: "Support / Helpdesk" },
    { icon: "⌘", label: "Integrations" },
    { icon: "⚙", label: "Settings" },
  ];

  /* ======================================================
     QUICK ACTIONS
     ====================================================== */

  const quickActions = [
    { icon: "$", label: "+ New Invoice", type: "green" },
    { icon: "♙", label: "+ New Lead", type: "blue" },
    { icon: "▤", label: "+ New Expense", type: "orange" },
    { icon: "☑", label: "+ New Task", type: "purple" },
    { icon: "♙", label: "+ Add Employee", type: "cyan" },
    { icon: "♙", label: "+ Add Customer", type: "pink" },
    { icon: "▦", label: "More Actions", type: "gray" },
  ];

  /* ======================================================
     METRIC CARDS
     ====================================================== */

  const metrics = [
    {
      title: "Total Revenue",
      value: "$24,780",
      change: "▲ 12.6% vs last month",
      type: "green",
      points: "M8 70 L30 55 L50 65 L70 35 L90 45 L110 20 L130 38 L150 12 L170 28",
    },
    {
      title: "Total Profit",
      value: "$8,430",
      change: "▲ 8.3% vs last month",
      type: "purple",
      points: "M8 72 L30 48 L50 58 L70 35 L90 47 L110 20 L130 30 L150 12 L170 26",
    },
    {
      title: "Total Expenses",
      value: "$6,350",
      change: "▼ -3.4% vs last month",
      type: "orange",
      points: "M8 65 L30 45 L50 52 L70 20 L90 40 L110 18 L130 48 L150 25 L170 40",
    },
    {
      title: "Open Invoices",
      value: "23",
      change: "$14,560 overdue",
      type: "blue",
      points: "M8 70 L30 55 L50 65 L70 35 L90 45 L110 25 L130 35 L150 15 L170 40",
    },
  ];

  /* ======================================================
     RECENT ACTIVITIES
     ====================================================== */

  const activities = [
    ["▤", "Invoice #INV-2026-1256 created", "2 min ago"],
    ["$", "Payment received from Ahmed Co.", "18 min ago"],
    ["♙", "New lead from Website", "45 min ago"],
    ["✓", 'Task "Follow up with client"', "1 hour ago"],
    ["▤", "Expense $250 added", "2 hours ago"],
  ];

  /* ======================================================
     NOTIFICATIONS
     ====================================================== */

  const notifications = [
    ["●", "Overdue invoice from Al Traders", "2 min ago", "red"],
    ["▲", "Low stock alert for 3 products", "25 min ago", "orange"],
    ["♙", "Leave request from Sara Khan", "1 hour ago", "purple"],
    ["▣", "System backup completed", "2 hours ago", "green"],
  ];

  /* ======================================================
     TOP CUSTOMERS
     ====================================================== */

  const customers = [
    ["A", "Ahmed Corporation", "$5,780"],
    ["G", "Global Solutions", "$4,230"],
    ["T", "TechNova LLC", "$3,620"],
    ["A", "Al-Barkat Traders", "$2,890"],
    ["F", "Future Enterprises", "$2,450"],
  ];

  /* ======================================================
     INDUSTRIES
     ====================================================== */

  const industries = [
    ["▥", "Office"],
    ["♙", "HR"],
    ["▣", "Hospital"],
    ["♧", "Restaurant"],
    ["🛒", "Retail"],
    ["⚒", "Construction"],
    ["⌂", "Real Estate"],
    ["◇", "Education"],
    ["▥", "Manufacturing"],
    ["♧", "Professional Services"],
    ["•••", "More"],
  ];

  return (
    <>
      <style>{`

        /* ==================================================
           GLOBAL
        ================================================== */

        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          background: #020b18;
          color: #f5f9ff;
        }

        body {
          overflow-x: hidden;
        }

        button,
        input {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        /* ==================================================
           MAIN APP
        ================================================== */

        .dashboard-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 72% 12%,
              rgba(0, 98, 190, 0.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 80% 75%,
              rgba(0, 220, 190, 0.05),
              transparent 25%
            ),
            #020b18;
        }

        .dashboard-layout {
          min-height: 100vh;
          display: flex;
        }

        /* ==================================================
           SIDEBAR
        ================================================== */

        .dashboard-sidebar {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 272px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          padding: 18px 12px 16px;
          background:
            linear-gradient(
              180deg,
              rgba(3, 16, 32, 0.99),
              rgba(2, 12, 25, 0.99)
            );
          border-right: 1px solid rgba(69, 126, 181, 0.18);
          overflow-y: auto;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 3px 10px 20px;
          min-height: 65px;
        }

        .brand-mark {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 11px;
          color: #b8ffff;
          font-size: 25px;
          font-weight: 800;
          background:
            linear-gradient(145deg, #13e3c3, #1479ff);
          box-shadow:
            0 0 20px rgba(0, 209, 255, 0.25);
        }

        .brand-name {
          font-size: 20px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .brand-subtitle {
          margin-top: 5px;
          color: #8392a8;
          font-size: 7px;
          letter-spacing: 0.1px;
          white-space: nowrap;
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sidebar-item {
          width: 100%;
          min-height: 42px;
          padding: 9px 12px;
          border: 1px solid transparent;
          border-radius: 7px;
          background: transparent;
          color: #d6e0ec;
          display: flex;
          align-items: center;
          gap: 13px;
          text-align: left;
          transition: 0.2s ease;
        }

        .sidebar-item:hover {
          background: rgba(15, 53, 81, 0.55);
          border-color: rgba(45, 174, 209, 0.16);
        }

        .sidebar-item.active {
          background:
            linear-gradient(
              90deg,
              rgba(14, 203, 186, 0.24),
              rgba(13, 77, 102, 0.25)
            );
          border-color: rgba(19, 220, 205, 0.28);
          box-shadow:
            inset 3px 0 0 #17dbc5,
            0 0 20px rgba(0, 216, 195, 0.06);
        }

        .sidebar-icon {
          width: 20px;
          min-width: 20px;
          text-align: center;
          color: #16d9c2;
          font-size: 18px;
        }

        .sidebar-item:nth-child(2) .sidebar-icon {
          color: #d65cff;
        }

        .sidebar-item:nth-child(3) .sidebar-icon {
          color: #d5e72f;
        }

        .sidebar-item:nth-child(4) .sidebar-icon {
          color: #ff4b65;
        }

        .sidebar-item:nth-child(6) .sidebar-icon {
          color: #2de0ce;
        }

        .sidebar-item:nth-child(7) .sidebar-icon {
          color: #31e397;
        }

        .sidebar-label {
          flex: 1;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }

        .sidebar-chevron {
          color: #c3ccd9;
          font-size: 13px;
        }

        .new-badge {
          padding: 3px 7px;
          border-radius: 5px;
          background: rgba(0, 216, 205, 0.12);
          color: #19d9cb;
          font-size: 10px;
          font-weight: 700;
        }

        .sidebar-bottom {
          margin-top: auto;
          padding-top: 18px;
        }

        .plan-card {
          padding: 17px;
          border: 1px solid rgba(69, 136, 197, 0.24);
          border-radius: 9px;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(21, 102, 190, 0.16),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              rgba(7, 31, 56, 0.95),
              rgba(3, 18, 36, 0.98)
            );
        }

        .plan-card-top {
          display: flex;
          justify-content: space-between;
          color: #a8b6c8;
          font-size: 12px;
        }

        .plan-close {
          border: 0;
          background: transparent;
          color: #9aa7b8;
          font-size: 18px;
        }

        .plan-diamond {
          margin-top: 13px;
          color: #2ee6d2;
          font-size: 29px;
        }

        .plan-label {
          color: #aeb9c9;
          font-size: 12px;
          margin-top: -28px;
          margin-left: 38px;
        }

        .plan-name {
          margin-left: 38px;
          margin-top: 3px;
          font-size: 20px;
          font-weight: 700;
        }

        .plan-price {
          margin-top: 12px;
          color: #20dfd0;
          font-size: 13px;
        }

        .plan-price span {
          color: #9aa9bc;
        }

        .plan-button {
          width: 100%;
          margin-top: 16px;
          padding: 11px 13px;
          border: 0;
          border-radius: 5px;
          color: #fff;
          font-weight: 700;
          background:
            linear-gradient(90deg, #14cfae, #176cf0);
          box-shadow:
            0 7px 25px rgba(0, 133, 255, 0.18);
        }

        /* ==================================================
           MOBILE SIDEBAR OVERLAY
        ================================================== */

        .mobile-overlay {
          display: none;
        }

        .mobile-menu-button {
          display: none;
        }

        /* ==================================================
           MAIN
        ================================================== */

        .dashboard-main {
          margin-left: 272px;
          width: calc(100% - 272px);
          min-width: 0;
        }

        .dashboard-header {
          height: 86px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(56, 108, 155, 0.16);
          background: rgba(2, 11, 24, 0.82);
        }

        .search-box {
          flex: 1;
          max-width: 575px;
          height: 50px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 15px;
          border: 1px solid rgba(73, 124, 174, 0.28);
          border-radius: 9px;
          background: rgba(5, 20, 39, 0.82);
        }

        .search-icon {
          color: #aebdce;
          font-size: 22px;
        }

        .search-input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          color: #e8f1fc;
          background: transparent;
          font-size: 14px;
        }

        .search-input::placeholder {
          color: #9ba9bc;
        }

        .shortcut {
          color: #aeb9c9;
          padding: 4px 7px;
          border: 1px solid rgba(95, 127, 163, 0.3);
          border-radius: 5px;
          font-size: 11px;
          white-space: nowrap;
        }

        .header-button {
          height: 50px;
          padding: 0 18px;
          border-radius: 8px;
          border: 1px solid rgba(65, 125, 190, 0.42);
          background: rgba(5, 20, 39, 0.82);
          color: #eaf4ff;
          font-weight: 600;
          white-space: nowrap;
        }

        .header-button.ai {
          border-color: #0ed4ae;
          background:
            linear-gradient(
              135deg,
              rgba(0, 194, 169, 0.15),
              rgba(0, 75, 100, 0.18)
            );
        }

        .header-button.mission {
          color: #eaf3ff;
        }

        .header-right {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-button {
          position: relative;
          width: 43px;
          height: 43px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: #dbe7f5;
          font-size: 20px;
        }

        .notification-count {
          position: absolute;
          top: 0;
          right: -1px;
          min-width: 17px;
          height: 17px;
          padding: 0 4px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          background: #ef4762;
          color: #fff;
          font-size: 9px;
          font-weight: 700;
        }

        .notification-count.blue {
          background: #159be7;
        }

        .profile {
          position: relative;
          display: flex;
          align-items: center;
          gap: 9px;
          margin-left: 5px;
        }

        .profile-text {
          text-align: right;
        }

        .profile-name {
          font-size: 14px;
          font-weight: 600;
        }

        .profile-role {
          margin-top: 2px;
          color: #7f90a5;
          font-size: 11px;
        }

        .profile-avatar {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 2px solid rgba(105, 133, 163, 0.45);
          background:
            radial-gradient(circle at 50% 35%, #c58f6d, #4e3025 42%, #141b25 43%);
          color: #fff;
          font-size: 18px;
        }

        .profile-arrow {
          border: 0;
          background: transparent;
          color: #d5e0ed;
          font-size: 13px;
        }

        .profile-menu {
          position: absolute;
          right: 0;
          top: 53px;
          z-index: 200;
          width: 180px;
          padding: 8px;
          border: 1px solid rgba(67, 125, 175, 0.35);
          border-radius: 9px;
          background: #071a30;
          box-shadow: 0 20px 50px rgba(0,0,0,.45);
        }

        .profile-menu button {
          width: 100%;
          padding: 10px;
          border: 0;
          border-radius: 6px;
          background: transparent;
          color: #dce7f3;
          text-align: left;
        }

        .profile-menu button:hover {
          background: rgba(36, 104, 143, .25);
        }

        /* ==================================================
           CONTENT
        ================================================== */

        .dashboard-content {
          padding: 0 30px 18px;
        }

        .hero-row {
          display: grid;
          grid-template-columns: minmax(420px, 1.45fr) repeat(4, minmax(130px, .62fr));
          gap: 10px;
          margin-top: 0;
        }

        .hero-card {
          min-height: 263px;
          padding: 32px 28px 18px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(61, 121, 181, 0.34);
          border-radius: 11px;
          background:
            radial-gradient(circle at 72% 35%, rgba(9, 215, 255, .08), transparent 28%),
            linear-gradient(135deg, #071a34, #031326);
        }

        .hero-card::before {
          content: "";
          position: absolute;
          left: -8%;
          right: -5%;
          bottom: 18px;
          height: 110px;
          opacity: .7;
          background:
            radial-gradient(
              ellipse at 50% 100%,
              rgba(21, 95, 255, .22),
              transparent 62%
            );
        }

        .hero-card::after {
          content: "";
          position: absolute;
          left: 10%;
          right: -10%;
          bottom: 45px;
          height: 90px;
          border-top: 1px solid rgba(22, 177, 255, .5);
          border-radius: 50%;
          transform: rotate(-3deg);
          box-shadow:
            0 -17px 0 rgba(22, 91, 255, .24),
            0 -33px 0 rgba(20, 220, 198, .11);
        }

        .hero-title {
          position: relative;
          z-index: 2;
          margin: 0;
          font-size: 25px;
          letter-spacing: -0.6px;
        }

        .hero-subtitle {
          position: relative;
          z-index: 2;
          margin: 8px 0 0;
          color: #d1dbe7;
          font-size: 14px;
        }

        .pulse {
          position: absolute;
          z-index: 4;
          left: 27px;
          bottom: 17px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          border: 1px solid rgba(49, 137, 186, .35);
          border-radius: 7px;
          background: rgba(4, 27, 50, .9);
        }

        .pulse-star {
          color: #10d6ea;
          font-size: 19px;
        }

        .pulse-title {
          color: #11cfe7;
          font-size: 14px;
        }

        .pulse-status {
          padding: 5px 10px;
          border-radius: 5px;
          color: #43dfba;
          background: rgba(17, 194, 145, .13);
          font-size: 11px;
          font-weight: 700;
        }

        .pulse-score {
          padding-left: 16px;
          border-left: 1px solid rgba(90, 126, 157, .28);
          color: #42e5b9;
          font-size: 26px;
        }

        .pulse-score span {
          color: #a6b5c5;
          font-size: 12px;
        }

        /* ==================================================
           METRICS
        ================================================== */

        .metric-card {
          min-height: 174px;
          padding: 17px 16px 9px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(59, 111, 161, .29);
          border-radius: 9px;
          background:
            linear-gradient(
              145deg,
              rgba(8, 25, 48, .95),
              rgba(3, 16, 32, .96)
            );
        }

        .metric-title {
          color: #aebdce;
          font-size: 11px;
        }

        .metric-value {
          margin-top: 8px;
          font-size: 24px;
          font-weight: 650;
        }

        .metric-change {
          margin-top: 4px;
          font-size: 10px;
        }

        .metric-change.green {
          color: #34dfa9;
        }

        .metric-change.purple {
          color: #43dfb7;
        }

        .metric-change.orange,
        .metric-change.red {
          color: #ff5d70;
        }

        .metric-change.blue {
          color: #ff526b;
        }

        .chart {
          margin-top: auto;
          width: 100%;
          height: 65px;
          overflow: visible;
        }

        .chart path {
          fill: none;
          stroke-width: 2.4;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .chart.green path {
          stroke: #32e4a6;
        }

        .chart.purple path {
          stroke: #ce4fff;
        }

        .chart.orange path {
          stroke: #ff9d0a;
        }

        .chart.blue path {
          stroke: #2f9df5;
        }

        /* ==================================================
           TOOLBAR
        ================================================== */

        .toolbar {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin: 13px 0 11px;
        }

        .dropdown-wrap {
          position: relative;
        }

        .toolbar-button {
          min-height: 36px;
          padding: 0 14px;
          border: 1px solid rgba(64, 112, 157, .34);
          border-radius: 7px;
          background: #07182d;
          color: #e0e9f4;
          font-size: 12px;
        }

        .dropdown-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 6px);
          z-index: 150;
          width: 150px;
          padding: 5px;
          border: 1px solid rgba(67, 126, 177, .36);
          border-radius: 8px;
          background: #071a30;
          box-shadow: 0 20px 45px rgba(0,0,0,.45);
        }

        .dropdown-menu button {
          width: 100%;
          padding: 9px 10px;
          border: 0;
          border-radius: 5px;
          background: transparent;
          color: #dce7f2;
          text-align: left;
          font-size: 12px;
        }

        .dropdown-menu button:hover {
          background: rgba(26, 105, 145, .28);
        }

        /* ==================================================
           QUICK ACTIONS
        ================================================== */

        .quick-actions {
          padding: 11px 13px 13px;
          border: 1px solid rgba(58, 116, 169, .29);
          border-radius: 9px;
          background: rgba(4, 18, 35, .8);
        }

        .section-title {
          margin: 0 0 10px;
          color: #e2ebf6;
          font-size: 13px;
          font-weight: 650;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
        }

        .quick-button {
          min-height: 69px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border: 1px solid rgba(68, 127, 174, .28);
          border-radius: 6px;
          background: rgba(6, 24, 45, .75);
          color: #edf4fc;
          font-size: 11px;
          text-align: center;
        }

        .quick-button:hover {
          transform: translateY(-1px);
          background: rgba(12, 43, 67, .9);
        }

        .quick-icon {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 17px;
          background: rgba(24, 173, 143, .16);
          color: #35e2b5;
        }

        .quick-button.blue .quick-icon {
          color: #38a9ff;
          background: rgba(28, 116, 218, .16);
        }

        .quick-button.orange .quick-icon {
          color: #ff9a2b;
          background: rgba(255, 139, 32, .15);
        }

        .quick-button.purple .quick-icon {
          color: #c65aff;
          background: rgba(153, 48, 226, .15);
        }

        .quick-button.cyan .quick-icon {
          color: #24dfdf;
          background: rgba(0, 192, 203, .14);
        }

        .quick-button.pink .quick-icon {
          color: #ff6fa4;
          background: rgba(218, 48, 121, .15);
        }

        .quick-button.gray .quick-icon {
          color: #b8c6d6;
          background: rgba(112, 137, 160, .14);
        }

        /* ==================================================
           MIDDLE GRID
        ================================================== */

        .middle-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(300px, .75fr);
          gap: 12px;
          margin-top: 12px;
        }

        .panel {
          border: 1px solid rgba(59, 117, 171, .28);
          border-radius: 9px;
          background:
            linear-gradient(
              145deg,
              rgba(6, 25, 48, .94),
              rgba(3, 16, 33, .97)
            );
        }

        /* ==================================================
           AI COMMAND
        ================================================== */

        .command-panel {
          min-height: 228px;
          padding: 19px 21px;
          position: relative;
          overflow: hidden;
        }

        .command-panel::after {
          content: "";
          position: absolute;
          right: 35px;
          top: 38px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(69, 118, 255, .34),
              rgba(142, 29, 255, .18) 35%,
              transparent 68%
            );
          box-shadow:
            0 0 40px rgba(72, 102, 255, .2);
        }

        .panel-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 19px;
          font-weight: 650;
        }

        .spark {
          color: #2bddec;
        }

        .panel-subtitle {
          margin-top: 6px;
          color: #aab8c9;
          font-size: 12px;
        }

        .command-input-row {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 0;
          margin-top: 14px;
        }

        .command-input {
          flex: 1;
          min-width: 0;
          height: 51px;
          padding: 0 15px;
          border: 1px solid rgba(61, 119, 170, .38);
          border-radius: 7px 0 0 7px;
          outline: 0;
          background: rgba(3, 17, 34, .84);
          color: white;
        }

        .command-input::placeholder {
          color: #8998ab;
        }

        .mic-button,
        .send-button {
          width: 48px;
          height: 51px;
          border: 1px solid rgba(62, 120, 172, .3);
          color: #fff;
          background: #0a2944;
        }

        .send-button {
          border-radius: 0 7px 7px 0;
          background: linear-gradient(135deg, #12d8c1, #2069ed);
          font-size: 20px;
        }

        .command-shortcuts {
          position: relative;
          z-index: 3;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }

        .command-chip {
          padding: 8px 10px;
          border: 1px solid rgba(69, 126, 176, .3);
          border-radius: 6px;
          color: #d4dfec;
          background: rgba(5, 21, 40, .78);
          font-size: 10px;
        }

        /* ==================================================
           MISSIONS
        ================================================== */

        .missions-panel {
          padding: 17px;
          min-height: 228px;
        }

        .panel-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .view-all {
          border: 0;
          background: transparent;
          color: #24c8f4;
          font-size: 11px;
        }

        .beta {
          margin-left: 4px;
          padding: 3px 6px;
          border-radius: 4px;
          color: #d6b7ff;
          background: rgba(155, 59, 255, .17);
          font-size: 9px;
          vertical-align: middle;
        }

        .mission {
          padding: 12px 10px;
          margin-top: 10px;
          border: 1px solid rgba(68, 122, 168, .25);
          border-radius: 7px;
          background: rgba(5, 21, 40, .65);
        }

        .mission-top {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .mission-icon {
          width: 26px;
          height: 26px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          color: #36e3ba;
          background: rgba(20, 199, 160, .13);
        }

        .mission-title {
          flex: 1;
          font-size: 11px;
        }

        .mission-status {
          color: #37d6aa;
          font-size: 9px;
        }

        .mission-percent {
          color: #c3cfdd;
          font-size: 10px;
        }

        .progress {
          height: 4px;
          margin: 8px 27px 0 36px;
          border-radius: 10px;
          background: rgba(61, 92, 120, .3);
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          border-radius: inherit;
          background: #2ddbb0;
        }

        .progress-bar.purple {
          background: #a74bff;
        }

        .progress-bar.orange {
          background: #f9a51a;
        }

        /* ==================================================
           LOWER GRID
        ================================================== */

        .lower-grid {
          display: grid;
          grid-template-columns: 1fr 1fr .95fr .95fr;
          gap: 12px;
          margin-top: 12px;
        }

        .small-panel {
          min-height: 200px;
          padding: 17px;
        }

        .list {
          margin-top: 5px;
        }

        .list-row {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 36px;
          border-bottom: 1px solid rgba(72, 111, 143, .16);
        }

        .list-row:last-child {
          border-bottom: 0;
        }

        .list-icon {
          width: 22px;
          color: #11d6c6;
          text-align: center;
          font-size: 13px;
        }

        .list-text {
          flex: 1;
          color: #cbd7e5;
          font-size: 10px;
        }

        .list-time {
          color: #75869b;
          font-size: 9px;
          white-space: nowrap;
        }

        .notification-dot {
          width: 23px;
          height: 23px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 10px;
          background: rgba(220, 54, 75, .14);
          color: #ff5b70;
        }

        .notification-dot.orange {
          color: #ffad25;
          background: rgba(255, 158, 25, .12);
        }

        .notification-dot.purple {
          color: #c25aff;
          background: rgba(156, 45, 224, .12);
        }

        .notification-dot.green {
          color: #20dfb1;
          background: rgba(17, 199, 151, .12);
        }

        /* ==================================================
           CUSTOMERS
        ================================================== */

        .customer-row {
          display: flex;
          align-items: center;
          gap: 8px;
          min-height: 34px;
          border-bottom: 1px solid rgba(72, 111, 143, .16);
        }

        .customer-row:last-child {
          border-bottom: 0;
        }

        .customer-avatar {
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #d8efff;
          background: #244d73;
          font-size: 9px;
        }

        .customer-name {
          flex: 1;
          color: #d5dfeb;
          font-size: 10px;
        }

        .customer-value {
          color: #42dcb1;
          font-size: 10px;
        }

        /* ==================================================
           AI INSIGHTS
        ================================================== */

        .insights-panel {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 80% 80%,
              rgba(112, 32, 213, .2),
              transparent 36%
            ),
            linear-gradient(
              145deg,
              rgba(6, 25, 49, .97),
              rgba(15, 15, 50, .9)
            );
        }

        .insight-new {
          padding: 4px 7px;
          border-radius: 5px;
          background: rgba(30, 209, 174, .12);
          color: #35dfbd;
          font-size: 9px;
        }

        .insight-text {
          margin-top: 26px;
          color: #ccd8e7;
          font-size: 11px;
          line-height: 1.7;
        }

        .insight-text strong {
          color: #31dfb4;
        }

        .insight-button {
          margin-top: 16px;
          padding: 8px 11px;
          border: 1px solid rgba(38, 143, 200, .3);
          border-radius: 5px;
          background: rgba(5, 26, 48, .7);
          color: #29d2ef;
          font-size: 10px;
        }

        .insight-orb {
          position: absolute;
          right: 19px;
          bottom: 13px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              #e36dff 0 6%,
              rgba(187, 64, 255, .45) 10%,
              rgba(83, 58, 255, .2) 40%,
              transparent 68%
            );
          box-shadow: 0 0 30px rgba(158, 66, 255, .35);
        }

        /* ==================================================
           BOTTOM AREA
        ================================================== */

        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 12px;
          margin-top: 12px;
        }

        .package-panel,
        .industries-panel {
          padding: 16px;
          min-height: 180px;
        }

        .package-content {
          margin-top: 13px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          border: 1px solid rgba(60, 117, 166, .23);
          border-radius: 6px;
          background: rgba(4, 19, 36, .75);
        }

        .package-icon {
          color: #29e1d1;
          font-size: 28px;
        }

        .package-name {
          flex: 1;
          font-size: 13px;
          font-weight: 650;
        }

        .package-price {
          color: #27dec1;
          font-size: 11px;
        }

        .package-price span {
          color: #7f91a6;
        }

        .access {
          margin-top: 11px;
          color: #aab8ca;
          font-size: 10px;
        }

        .access strong {
          float: right;
          color: #35d8bc;
        }

        .upgrade-small {
          width: 100%;
          margin-top: 11px;
          padding: 9px;
          border: 0;
          border-radius: 5px;
          background: linear-gradient(90deg, #17cfae, #1c70e9);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
        }

        .industries-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .manage {
          border: 0;
          background: transparent;
          color: #26cbe9;
          font-size: 10px;
        }

        .industry-grid {
          margin-top: 12px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 8px;
        }

        .industry-item {
          min-height: 55px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: 1px solid rgba(65, 120, 165, .25);
          border-radius: 6px;
          background: rgba(5, 22, 42, .75);
          color: #d7e1ed;
          font-size: 9px;
          text-align: center;
        }

        .industry-item:first-child {
          border-color: rgba(21, 218, 180, .48);
          color: #34dfb7;
        }

        .industry-icon {
          font-size: 16px;
          color: #28c9f0;
        }

        /* ==================================================
           FOOTER
        ================================================== */

        .dashboard-footer {
          min-height: 54px;
          margin-top: 16px;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(62, 108, 151, .2);
          background: rgba(2, 11, 23, .85);
          color: #8190a2;
          font-size: 10px;
        }

        .footer-links {
          display: flex;
          gap: 34px;
        }

        .footer-links button {
          border: 0;
          background: transparent;
          color: #9aa8b9;
          font-size: 10px;
        }

        .footer-links button:hover {
          color: #27d8e0;
        }

        /* ==================================================
           RESPONSIVE — TABLET
        ================================================== */

        @media (max-width: 1200px) {

          .dashboard-sidebar {
            width: 230px;
          }

          .dashboard-main {
            margin-left: 230px;
            width: calc(100% - 230px);
          }

          .dashboard-header {
            padding: 15px;
          }

          .header-button {
            padding: 0 11px;
          }

          .profile-text {
            display: none;
          }

          .dashboard-content {
            padding: 0 16px 16px;
          }

          .hero-row {
            grid-template-columns: 1.6fr repeat(2, 1fr);
          }

          .hero-card {
            grid-row: span 2;
          }

          .lower-grid {
            grid-template-columns: 1fr 1fr;
          }

          .industry-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ==================================================
           RESPONSIVE — MOBILE
        ================================================== */

        @media (max-width: 760px) {

          body {
            overflow-x: hidden;
          }

          .dashboard-layout {
            display: block;
          }

          /* Mobile sidebar */
          .dashboard-sidebar {
            width: 285px;
            transform: translateX(-105%);
            transition: transform .25s ease;
            box-shadow: 15px 0 50px rgba(0,0,0,.45);
          }

          .dashboard-sidebar.mobile-open {
            transform: translateX(0);
          }

          .mobile-overlay {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 90;
            background: rgba(0, 5, 12, .68);
            backdrop-filter: blur(2px);
          }

          .mobile-menu-button {
            display: grid;
            place-items: center;
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            border: 1px solid rgba(61, 121, 176, .34);
            border-radius: 8px;
            background: #07182d;
            color: #e8f2fd;
            font-size: 22px;
          }

          .dashboard-main {
            width: 100%;
            margin-left: 0;
          }

          .dashboard-header {
            position: sticky;
            top: 0;
            z-index: 80;
            height: 65px;
            padding: 10px;
            gap: 7px;
          }

          .search-box {
            height: 42px;
            padding: 0 9px;
          }

          .search-icon {
            font-size: 17px;
          }

          .search-input {
            font-size: 11px;
          }

          .shortcut {
            display: none;
          }

          .header-button {
            width: 42px;
            height: 42px;
            padding: 0;
            font-size: 0;
          }

          .header-button.ai::after {
            content: "✦";
            font-size: 18px;
          }

          .header-button.mission::after {
            content: "✧";
            font-size: 18px;
          }

          .header-right {
            gap: 0;
          }

          .header-right .icon-button {
            display: none;
          }

          .profile {
            margin-left: 0;
          }

          .profile-avatar {
            width: 39px;
            height: 39px;
          }

          .profile-arrow {
            display: none;
          }

          .dashboard-content {
            padding: 10px;
          }

          .hero-row {
            display: block;
          }

          .hero-card {
            min-height: 260px;
            margin-bottom: 10px;
            padding: 26px 20px;
          }

          .hero-title {
            font-size: 23px;
          }

          .hero-subtitle {
            font-size: 12px;
            max-width: 250px;
          }

          .pulse {
            left: 15px;
            right: 15px;
            bottom: 13px;
            gap: 7px;
            padding: 10px;
          }

          .pulse-title {
            font-size: 11px;
          }

          .pulse-status {
            font-size: 9px;
            padding: 4px 6px;
          }

          .pulse-score {
            font-size: 21px;
            padding-left: 8px;
          }

          .metric-card {
            min-height: 145px;
            margin-bottom: 10px;
          }

          .metric-value {
            font-size: 28px;
          }

          .toolbar {
            justify-content: stretch;
            margin-top: 8px;
          }

          .toolbar .dropdown-wrap,
          .toolbar-button {
            flex: 1;
          }

          .quick-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .quick-button:last-child {
            grid-column: span 2;
          }

          .middle-grid,
          .lower-grid,
          .bottom-grid {
            grid-template-columns: 1fr;
          }

          .command-panel,
          .missions-panel,
          .small-panel,
          .package-panel,
          .industries-panel {
            min-height: auto;
          }

          .command-panel {
            min-height: 250px;
          }

          .command-panel::after {
            right: 15px;
            top: 80px;
          }

          .command-input-row {
            position: relative;
          }

          .command-shortcuts {
            position: relative;
          }

          .industry-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .dashboard-footer {
            min-height: 80px;
            padding: 14px 10px;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
          }

          .footer-links {
            gap: 17px;
          }
        }

        /* ==================================================
           SMALL PHONES
        ================================================== */

        @media (max-width: 420px) {

          .header-button.ai,
          .header-button.mission {
            display: none;
          }

          .hero-card {
            min-height: 245px;
          }

          .hero-title {
            font-size: 20px;
          }

          .pulse-title {
            display: none;
          }

          .pulse {
            justify-content: space-between;
          }

          .quick-grid {
            gap: 6px;
          }

          .quick-button {
            min-height: 65px;
            font-size: 10px;
          }

          .industry-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

      `}</style>

      <div className="dashboard-page">

        {/* ==================================================
            MOBILE OVERLAY
            NEXT STEP: MOBILE NAVIGATION LOGIC CAN BE EXTENDED HERE
        ================================================== */}

        {mobileSidebarOpen && (
          <button
            type="button"
            className="mobile-overlay"
            aria-label="Close navigation"
            onClick={closeMobileSidebar}
          />
        )}

        <div className="dashboard-layout">

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside
            className={`dashboard-sidebar ${
              mobileSidebarOpen ? "mobile-open" : ""
            }`}
          >

            <div className="brand">
              <div className="brand-mark">◇</div>

              <div>
                <div className="brand-name">BRIQONA OS</div>
                <div className="brand-subtitle">
                  All-in-One Business Operating System
                </div>
              </div>
            </div>

            <nav className="sidebar-menu">

              {menuItems.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={`sidebar-item ${
                    item.active ? "active" : ""
                  }`}
                  onClick={() => {
                    if (item.label === "AI Workforce") {
                      setWorkforceOpen(!workforceOpen);
                    }

                    if (item.label === "Industries Hub") {
                      setIndustryOpen(!industryOpen);
                    }

                    if (window.innerWidth <= 760) {
                      closeMobileSidebar();
                    }
                  }}
                >

                  <span className="sidebar-icon">
                    {item.icon}
                  </span>

                  <span className="sidebar-label">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="new-badge">
                      {item.badge}
                    </span>
                  )}

                  {item.dropdown && (
                    <span className="sidebar-chevron">
                      {item.label === "AI Workforce"
                        ? workforceOpen
                          ? "⌃"
                          : "⌄"
                        : industryOpen
                        ? "⌃"
                        : "⌄"}
                    </span>
                  )}

                </button>
              ))}

            </nav>

            {/* ==================================================
                OPTIONAL SIDEBAR DROPDOWN PREVIEW
                NEXT STEP: REAL ROUTING CAN BE CONNECTED HERE
            ================================================== */}

            {workforceOpen && (
              <div
                style={{
                  margin: "2px 12px 6px 44px",
                  padding: "7px 0",
                  borderLeft: "1px solid rgba(45,210,190,.22)",
                }}
              >
                <button
                  type="button"
                  style={subMenuStyle}
                  onClick={closeMobileSidebar}
                >
                  Workforce Overview
                </button>

                <button
                  type="button"
                  style={subMenuStyle}
                  onClick={closeMobileSidebar}
                >
                  AI Employees
                </button>
              </div>
            )}

            {industryOpen && (
              <div
                style={{
                  margin: "2px 12px 6px 44px",
                  padding: "7px 0",
                  borderLeft: "1px solid rgba(45,210,190,.22)",
                }}
              >
                <button
                  type="button"
                  style={subMenuStyle}
                  onClick={closeMobileSidebar}
                >
                  Office
                </button>

                <button
                  type="button"
                  style={subMenuStyle}
                  onClick={closeMobileSidebar}
                >
                  Hospital
                </button>

                <button
                  type="button"
                  style={subMenuStyle}
                  onClick={closeMobileSidebar}
                >
                  Retail
                </button>
              </div>
            )}

            <div className="sidebar-bottom">

              <div className="plan-card">

                <div className="plan-card-top">
                  <span>Current Plan</span>

                  <button
                    type="button"
                    className="plan-close"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <div className="plan-diamond">
                  ◇
                </div>

                <div className="plan-label">
                  Current Plan
                </div>

                <div className="plan-name">
                  Growth
                </div>

                <div className="plan-price">
                  $15 <span>/ month</span>
                </div>

                <button
                  type="button"
                  className="plan-button"
                  onClick={() =>
                    alert("Upgrade Plan selected")
                  }
                >
                  Upgrade Plan →
                </button>

              </div>

            </div>

          </aside>

          {/* ==================================================
              MAIN AREA
          ================================================== */}

          <main className="dashboard-main">

            {/* ==================================================
                HEADER
            ================================================== */}

            <header className="dashboard-header">

              {/* MOBILE HAMBURGER */}
              <button
                type="button"
                className="mobile-menu-button"
                aria-label="Open menu"
                onClick={() =>
                  setMobileSidebarOpen(true)
                }
              >
                ☰
              </button>

              <div className="search-box">

                <span className="search-icon">
                  ⌕
                </span>

                <input
                  className="search-input"
                  type="text"
                  placeholder="Ask Briqona AI or type a command..."
                />

                <span className="shortcut">
                  ⌘ K
                </span>

              </div>

              <button
                type="button"
                className="header-button ai"
                onClick={() =>
                  alert("AI Copilot opened")
                }
              >
                ✨ AI Copilot
              </button>

              <button
                type="button"
                className="header-button mission"
                onClick={() =>
                  alert("AI Mission Center opened")
                }
              >
                ✦ AI Mission Center
              </button>

              <div className="header-right">

                <button
                  type="button"
                  className="icon-button"
                  aria-label="Notifications"
                >
                  ♧
                  <span className="notification-count">
                    5
                  </span>
                </button>

                <button
                  type="button"
                  className="icon-button"
                  aria-label="Messages"
                >
                  ▢
                  <span className="notification-count blue">
                    3
                  </span>
                </button>

                <div className="profile">

                  <div className="profile-text">
                    <div className="profile-name">
                      Ali Raza
                    </div>

                    <div className="profile-role">
                      Owner
                    </div>
                  </div>

                  <button
                    type="button"
                    className="profile-avatar"
                    onClick={() =>
                      setProfileOpen(!profileOpen)
                    }
                    aria-label="Profile"
                  >
                    👨🏻
                  </button>

                  <button
                    type="button"
                    className="profile-arrow"
                    onClick={() =>
                      setProfileOpen(!profileOpen)
                    }
                  >
                    {profileOpen ? "⌃" : "⌄"}
                  </button>

                  {profileOpen && (
                    <div className="profile-menu">

                      <button
                        type="button"
                        onClick={() =>
                          alert("Profile")
                        }
                      >
                        Profile
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          alert("Account Settings")
                        }
                      >
                        Account Settings
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          alert("Logout")
                        }
                      >
                        Logout
                      </button>

                    </div>
                  )}

                </div>

              </div>

            </header>

            {/* ==================================================
                DASHBOARD CONTENT
                NEXT STEP: API DATA WILL BE CONNECTED HERE
            ================================================== */}

            <section className="dashboard-content">

              {/* ==================================================
                  HERO + METRICS
              ================================================== */}

              <div className="hero-row">

                <div className="hero-card">

                  <h1 className="hero-title">
                    Good morning, Ali Raza! 👋
                  </h1>

                  <p className="hero-subtitle">
                    Here's what's happening with your
                    business today.
                  </p>

                  <div className="pulse">

                    <span className="pulse-star">
                      ✦
                    </span>

                    <span className="pulse-title">
                      AI Business Pulse
                    </span>

                    <span className="pulse-status">
                      Excellent
                    </span>

                    <span className="pulse-score">
                      87 <span>/100</span>
                    </span>

                  </div>

                </div>

                {metrics.map((metric) => (
                  <div
                    className="metric-card"
                    key={metric.title}
                  >

                    <div className="metric-title">
                      {metric.title}
                    </div>

                    <div className="metric-value">
                      {metric.value}
                    </div>

                    <div
                      className={`metric-change ${metric.type}`}
                    >
                      {metric.change}
                    </div>

                    <svg
                      className={`chart ${metric.type}`}
                      viewBox="0 0 180 80"
                      preserveAspectRatio="none"
                    >
                      <path d={metric.points} />
                    </svg>

                  </div>
                ))}

              </div>

              {/* ==================================================
                  TOOLBAR
              ================================================== */}

              <div className="toolbar">

                <div className="dropdown-wrap">

                  <button
                    type="button"
                    className="toolbar-button"
                    onClick={() =>
                      setPeriodOpen(!periodOpen)
                    }
                  >
                    ▣ &nbsp; {selectedPeriod} &nbsp;
                    {periodOpen ? "⌃" : "⌄"}
                  </button>

                  {periodOpen && (
                    <div className="dropdown-menu">

                      {[
                        "This Month",
                        "Last Month",
                        "This Quarter",
                        "This Year",
                      ].map((period) => (
                        <button
                          key={period}
                          type="button"
                          onClick={() => {
                            setSelectedPeriod(period);
                            setPeriodOpen(false);
                          }}
                        >
                          {period}
                        </button>
                      ))}

                    </div>
                  )}

                </div>

                <button
                  type="button"
                  className="toolbar-button"
                  onClick={() =>
                    alert("Customize dashboard")
                  }
                >
                  ✣ &nbsp; Customize
                </button>

              </div>

              {/* ==================================================
                  QUICK ACTIONS
              ================================================== */}

              <section className="quick-actions">

                <h2 className="section-title">
                  Quick Actions
                </h2>

                <div className="quick-grid">

                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      type="button"
                      className={`quick-button ${action.type}`}
                      onClick={() =>
                        alert(`${action.label} selected`)
                      }
                    >

                      <span className="quick-icon">
                        {action.icon}
                      </span>

                      <span>
                        {action.label}
                      </span>

                    </button>
                  ))}

                </div>

              </section>

              {/* ==================================================
                  AI COMMAND + AI MISSIONS
              ================================================== */}

              <div className="middle-grid">

                <section className="panel command-panel">

                  <div className="panel-heading">
                    <span className="spark">
                      ✦
                    </span>

                    AI Command Center
                  </div>

                  <div className="panel-subtitle">
                    Ask anything. Briqona AI is ready to help.
                  </div>

                  <div className="command-input-row">

                    <input
                      className="command-input"
                      type="text"
                      placeholder="e.g. Show me sales trend, top customers, overdue invoices..."
                    />

                    <button
                      type="button"
                      className="mic-button"
                      onClick={() =>
                        alert("Voice input")
                      }
                    >
                      ♫
                    </button>

                    <button
                      type="button"
                      className="send-button"
                      onClick={() =>
                        alert("Command sent")
                      }
                    >
                      ➤
                    </button>

                  </div>

                  <div className="command-shortcuts">

                    {[
                      "Sales Summary",
                      "Overdue Invoices",
                      "Cash Flow",
                      "Inventory Alert",
                      "HR Report",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="command-chip"
                        onClick={() =>
                          alert(`${item} selected`)
                        }
                      >
                        {item}
                      </button>
                    ))}

                  </div>

                </section>

                <section className="panel missions-panel">

                  <div className="panel-heading-row">

                    <div className="panel-heading">
                      <span className="spark">
                        ✦
                      </span>

                      AI Missions

                      <span className="beta">
                        Beta
                      </span>
                    </div>

                    <button
                      type="button"
                      className="view-all"
                    >
                      View All
                    </button>

                  </div>

                  <Mission
                    icon="◎"
                    title="Recover overdue payments"
                    status="In Progress"
                    percent="65%"
                    width="65%"
                  />

                  <Mission
                    icon="◎"
                    title="Increase this month sales"
                    status="In Progress"
                    percent="40%"
                    width="40%"
                    color="purple"
                  />

                  <Mission
                    icon="▣"
                    title="Reduce expenses"
                    status="Planned"
                    percent="20%"
                    width="20%"
                    color="orange"
                  />

                </section>

              </div>

              {/* ==================================================
                  LOWER INFORMATION GRID
              ================================================== */}

              <div className="lower-grid">

                {/* Recent Activities */}

                <section className="panel small-panel">

                  <div className="panel-heading-row">

                    <div className="section-title">
                      Recent Activities
                    </div>

                    <button
                      type="button"
                      className="view-all"
                    >
                      View All
                    </button>

                  </div>

                  <div className="list">

                    {activities.map(
                      ([icon, text, time]) => (
                        <div
                          className="list-row"
                          key={text}
                        >

                          <span className="list-icon">
                            {icon}
                          </span>

                          <span className="list-text">
                            {text}
                          </span>

                          <span className="list-time">
                            {time}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </section>

                {/* Notifications */}

                <section className="panel small-panel">

                  <div className="panel-heading-row">

                    <div className="section-title">
                      Notifications
                    </div>

                    <button
                      type="button"
                      className="view-all"
                    >
                      View All
                    </button>

                  </div>

                  <div className="list">

                    {notifications.map(
                      ([icon, text, time, type]) => (
                        <div
                          className="list-row"
                          key={text}
                        >

                          <span
                            className={`notification-dot ${type}`}
                          >
                            {icon}
                          </span>

                          <span className="list-text">
                            {text}
                          </span>

                          <span className="list-time">
                            {time}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </section>

                {/* Top Customers */}

                <section className="panel small-panel">

                  <div className="panel-heading-row">

                    <div className="section-title">
                      Top Customers
                    </div>

                    <button
                      type="button"
                      className="view-all"
                    >
                      View All
                    </button>

                  </div>

                  <div>

                    {customers.map(
                      ([letter, name, value]) => (
                        <div
                          className="customer-row"
                          key={name}
                        >

                          <span className="customer-avatar">
                            {letter}
                          </span>

                          <span className="customer-name">
                            {name}
                          </span>

                          <span className="customer-value">
                            {value}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </section>

                {/* AI Insights */}

                <section className="panel small-panel insights-panel">

                  <div className="panel-heading-row">

                    <div className="panel-heading">
                      <span className="spark">
                        ✦
                      </span>

                      AI Insights
                    </div>

                    <span className="insight-new">
                      New
                    </span>

                  </div>

                  <div className="insight-text">

                    Your sales are up{" "}
                    <strong>12.6%</strong> this month.

                    <br />

                    Focus on recovering{" "}
                    <strong>$14,560</strong> in overdue
                    invoices to improve cash flow.

                  </div>

                  <button
                    type="button"
                    className="insight-button"
                    onClick={() =>
                      alert("AI Insights opened")
                    }
                  >
                    View All Insights →
                  </button>

                  <div className="insight-orb">
                    ◉
                  </div>

                </section>

              </div>

              {/* ==================================================
                  PACKAGE + INDUSTRIES
              ================================================== */}

              <div className="bottom-grid">

                <section className="panel package-panel">

                  <div className="section-title">
                    Package & Access
                  </div>

                  <div className="package-content">

                    <div className="package-icon">
                      ◇
                    </div>

                    <div className="package-name">
                      Growth Plan
                    </div>

                    <div className="package-price">
                      $15 <span>/ month</span>
                    </div>

                  </div>

                  <div className="access">
                    Access
                    <strong>
                      38 / 60 Features
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="upgrade-small"
                    onClick={() =>
                      alert("Upgrade to Pro")
                    }
                  >
                    🚀 Upgrade to Pro
                  </button>

                </section>

                <section className="panel industries-panel">

                  <div className="industries-header">

                    <div className="section-title">
                      Industries Hub
                    </div>

                    <button
                      type="button"
                      className="manage"
                      onClick={() =>
                        alert("Manage industries")
                      }
                    >
                      Manage
                    </button>

                  </div>

                  <div className="industry-grid">

                    {industries.map(
                      ([icon, name]) => (
                        <button
                          type="button"
                          className="industry-item"
                          key={name}
                          onClick={() =>
                            alert(`${name} selected`)
                          }
                        >

                          <span className="industry-icon">
                            {icon}
                          </span>

                          <span>
                            {name}
                          </span>

                        </button>
                      )
                    )}

                  </div>

                </section>

              </div>

            </section>

            {/* ==================================================
                FOOTER
            ================================================== */}

            <footer className="dashboard-footer">

              <span>
                © 2026 Briqona OS. All rights reserved.
              </span>

              <span>
                Version 1.0.0
              </span>

              <div className="footer-links">

                <button
                  type="button"
                  onClick={() =>
                    alert("Privacy Policy")
                  }
                >
                  Privacy Policy
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Terms of Service")
                  }
                >
                  Terms of Service
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Support")
                  }
                >
                  Support
                </button>

              </div>

            </footer>

          </main>

        </div>

      </div>
    </>
  );
}


/* ==========================================================
   MISSION COMPONENT
   ========================================================== */

function Mission({
  icon,
  title,
  status,
  percent,
  width,
  color = "",
}) {
  return (
    <div className="mission">

      <div className="mission-top">

        <span className="mission-icon">
          {icon}
        </span>

        <span className="mission-title">
          {title}
        </span>

        <span className="mission-status">
          {status}
        </span>

        <span className="mission-percent">
          {percent}
        </span>

      </div>

      <div className="progress">

        <div
          className={`progress-bar ${color}`}
          style={{ width }}
        />

      </div>

    </div>
  );
}


/* ==========================================================
   SIDEBAR SUBMENU STYLE
   ========================================================== */

const subMenuStyle = {
  width: "100%",
  padding: "7px 10px",
  border: 0,
  background: "transparent",
  color: "#8fa3b9",
  textAlign: "left",
  fontSize: "11px",
  cursor: "pointer",
};


/* ==========================================================
   EXPORT
========================================================== */

export default Dashboard;
