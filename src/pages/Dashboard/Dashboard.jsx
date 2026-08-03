import React, { useEffect, useState } from "react";

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [month, setMonth] = useState("This Month");
  const [command, setCommand] = useState("");

  const menu = [
    ["⌂", "Dashboard"],
    ["✦", "AI Command Center", "New"],
    ["♙", "AI Workforce", "⌄"],
    ["◎", "Outcome Center"],
    ["▦", "Industries Hub", "⌄"],
    ["♟", "CRM"],
    ["$", "Finance"],
    ["♙", "HR"],
    ["▣", "Inventory"],
    ["☑", "Projects & Tasks"],
    ["▤", "Documents"],
    ["ϟ", "Automation"],
    ["▥", "Analytics"],
    ["▣", "Communication"],
    ["◉", "Support / Helpdesk"],
    ["⌘", "Integrations"],
    ["⚙", "Settings"],
  ];

  const quickActions = [
    ["$", "New Invoice"],
    ["♙", "New Lead"],
    ["▤", "New Expense"],
    ["☑", "New Task"],
    ["♙", "Add Employee"],
    ["♙", "Add Customer"],
    ["▦", "More Actions"],
  ];

  const activities = [
    ["▤", "Invoice #INV-2026-1256 created", "2 min ago"],
    ["$", "Payment received from Ahmed Co.", "18 min ago"],
    ["♙", "New lead from Website", "45 min ago"],
    ["✓", 'Task "Follow up with client"', "1 hour ago"],
    ["▤", "Expense $250 added", "2 hours ago"],
  ];

  const notifications = [
    ["●", "Overdue invoice from Al Traders", "2 min ago"],
    ["⚠", "Low stock alert for 3 products", "25 min ago"],
    ["♙", "Leave request from Sara Khan", "1 hour ago"],
    ["▣", "System backup completed", "2 hours ago"],
  ];

  const customers = [
    ["A", "Ahmed Corporation", "$5,780"],
    ["G", "Global Solutions", "$4,230"],
    ["T", "TechNova LLC", "$3,620"],
    ["A", "Al-Barkat Traders", "$2,890"],
    ["F", "Future Enterprises", "$2,450"],
  ];

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

  const missions = [
    ["◉", "Recover overdue payments", "In Progress", "65%", "green"],
    ["◎", "Increase this month sales", "In Progress", "40%", "purple"],
    ["▣", "Reduce expenses", "Planned", "20%", "orange"],
  ];

  const runCommand = () => {
    if (!command.trim()) return;
    alert(`Briqona AI received: ${command}`);
    setCommand("");
  };

  const quickAction = (name) => {
    alert(`${name} action opened`);
  };

  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <div className="briqona-app">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          min-height: 100%;
          background: #020b18;
        }

        body {
          font-family: Inter, Arial, Helvetica, sans-serif;
          color: #edf7ff;
        }

        button, input {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .briqona-app {
          min-height: 100vh;
          background:
            radial-gradient(circle at 70% 10%, rgba(0, 144, 255, .06), transparent 28%),
            radial-gradient(circle at 90% 80%, rgba(123, 58, 237, .05), transparent 30%),
            #020b18;
          overflow-x: hidden;
        }

        .dashboard-shell {
          min-height: 100vh;
          display: flex;
        }

        /* ================= SIDEBAR ================= */

        .sidebar {
          width: 272px;
          min-width: 272px;
          min-height: 100vh;
          background:
            linear-gradient(180deg, rgba(3, 17, 32, .98), rgba(1, 10, 21, .99));
          border-right: 1px solid rgba(70, 135, 190, .22);
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          padding: 17px 16px;
        }

        .brand {
          height: 64px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 2px 8px 12px;
          margin-bottom: 10px;
        }

        .brand-logo {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          font-weight: 800;
          color: #fff;
          background:
            linear-gradient(145deg, #00e0c5, #118eff);
          box-shadow: 0 0 24px rgba(0, 220, 255, .25);
        }

        .brand-name {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -.5px;
        }

        .brand-subtitle {
          color: #8395a9;
          font-size: 7px;
          margin-top: 3px;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
          padding-right: 2px;
        }

        .nav-item {
          width: 100%;
          min-height: 40px;
          border: 1px solid transparent;
          border-radius: 7px;
          background: transparent;
          color: #b4c1d0;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 8px 11px;
          text-align: left;
          transition: .2s ease;
          font-size: 14px;
        }

        .nav-item:hover {
          color: #fff;
          background: rgba(19, 103, 147, .15);
          border-color: rgba(39, 210, 222, .15);
        }

        .nav-item.active {
          color: #fff;
          background:
            linear-gradient(90deg, rgba(0, 216, 190, .22), rgba(0, 116, 165, .12));
          border-color: rgba(0, 225, 205, .32);
          box-shadow: inset 3px 0 0 #1ee0ca;
        }

        .nav-icon {
          width: 20px;
          min-width: 20px;
          text-align: center;
          font-size: 17px;
          color: #12d8c4;
        }

        .nav-item:nth-child(2) .nav-icon { color: #c54cff; }
        .nav-item:nth-child(3) .nav-icon { color: #d8e52b; }
        .nav-item:nth-child(4) .nav-icon { color: #ff456f; }
        .nav-item:nth-child(7) .nav-icon { color: #2cf0a7; }
        .nav-item:nth-child(9) .nav-icon { color: #ffb329; }

        .nav-label {
          flex: 1;
        }

        .nav-badge {
          font-size: 10px;
          padding: 4px 7px;
          border-radius: 5px;
          color: #7effee;
          background: rgba(0, 213, 197, .14);
        }

        /* ================= PLAN ================= */

        .plan-card {
          margin-top: auto;
          border: 1px solid rgba(71, 130, 190, .3);
          border-radius: 9px;
          background:
            radial-gradient(circle at 15% 20%, rgba(0, 205, 207, .10), transparent 35%),
            linear-gradient(145deg, rgba(5, 30, 54, .96), rgba(2, 14, 28, .98));
          padding: 15px;
          position: relative;
        }

        .plan-close {
          position: absolute;
          right: 12px;
          top: 10px;
          color: #8392a4;
          background: none;
          border: 0;
          font-size: 17px;
        }

        .plan-small {
          color: #8396aa;
          font-size: 12px;
        }

        .plan-name {
          font-size: 20px;
          font-weight: 700;
          margin-top: 5px;
        }

        .plan-price {
          color: #20e2d0;
          font-size: 14px;
          margin: 7px 0 13px;
        }

        .plan-button,
        .upgrade-button {
          border: 0;
          border-radius: 6px;
          color: white;
          font-weight: 600;
          background: linear-gradient(100deg, #16cdb9, #176fe8);
          box-shadow: 0 5px 20px rgba(15, 160, 255, .18);
        }

        .plan-button {
          width: 100%;
          padding: 10px;
          text-align: center;
        }

        /* ================= MAIN ================= */

        .main {
          width: calc(100% - 272px);
          margin-left: 272px;
          min-height: 100vh;
          padding: 18px 28px 0;
        }

        .topbar {
          height: 64px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 5px;
        }

        .mobile-menu {
          display: none;
        }

        .search-box {
          flex: 1;
          max-width: 575px;
          height: 48px;
          border: 1px solid rgba(77, 127, 173, .34);
          background: rgba(4, 20, 39, .75);
          border-radius: 9px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 15px;
          color: #94a9bc;
        }

        .search-box input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: 0;
          outline: 0;
          color: #fff;
          font-size: 14px;
        }

        .search-box input::placeholder {
          color: #8ea0b4;
        }

        .shortcut {
          border: 1px solid rgba(100, 140, 180, .25);
          border-radius: 5px;
          padding: 4px 7px;
          font-size: 11px;
          color: #8fa0b2;
        }

        .top-button {
          height: 48px;
          padding: 0 18px;
          border: 1px solid rgba(61, 110, 166, .5);
          border-radius: 8px;
          background: rgba(4, 18, 36, .75);
          color: #e7f3ff;
          white-space: nowrap;
        }

        .top-button.ai {
          border-color: #00d8ba;
          background: rgba(0, 198, 168, .08);
        }

        .top-button:hover {
          border-color: #17d9d1;
        }

        .top-icon {
          width: 42px;
          height: 42px;
          border: 0;
          background: transparent;
          color: white;
          position: relative;
          font-size: 19px;
        }

        .notification-count {
          position: absolute;
          right: 0;
          top: 0;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ed3d52;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 6px;
        }

        .profile-text {
          text-align: right;
        }

        .profile-name {
          font-size: 13px;
        }

        .profile-role {
          font-size: 10px;
          color: #8b9caf;
          margin-top: 3px;
        }

        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 2px solid rgba(111, 139, 165, .5);
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #9b735b, #2d1e19);
          font-size: 20px;
        }

        /* ================= HERO ================= */

        .hero {
          min-height: 264px;
          border: 1px solid rgba(74, 134, 190, .35);
          border-radius: 10px;
          padding: 29px 27px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 52% 50%, rgba(0, 224, 196, .12), transparent 24%),
            radial-gradient(circle at 78% 15%, rgba(0, 138, 255, .10), transparent 30%),
            linear-gradient(120deg, #04182e, #020d1d 75%);
        }

        .hero::before {
          content: "";
          position: absolute;
          width: 110%;
          height: 100px;
          left: -4%;
          bottom: 20px;
          border-top: 2px solid rgba(17, 157, 255, .55);
          border-radius: 50%;
          transform: rotate(-3deg);
          box-shadow:
            0 -15px 0 rgba(0, 125, 255, .18),
            0 -30px 0 rgba(0, 214, 198, .10);
        }

        .hero::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: #4eefff;
          border-radius: 50%;
          top: 63px;
          left: 43%;
          box-shadow: 0 0 18px #20e8ff;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 25px;
          margin: 0;
          font-weight: 700;
        }

        .hero-subtitle {
          color: #c1d0de;
          font-size: 14px;
          margin-top: 8px;
        }

        .pulse {
          position: absolute;
          z-index: 4;
          left: 27px;
          bottom: 27px;
          height: 54px;
          min-width: 322px;
          border: 1px solid rgba(37, 132, 181, .38);
          border-radius: 8px;
          background: rgba(3, 26, 48, .88);
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 16px;
        }

        .pulse-title {
          color: #2be2e2;
          font-size: 14px;
        }

        .excellent {
          background: rgba(26, 196, 155, .18);
          color: #52e7c1;
          padding: 6px 9px;
          border-radius: 5px;
          font-size: 11px;
        }

        .pulse-score {
          font-size: 27px;
          color: #44e8b9;
          margin-left: auto;
        }

        .pulse-score small {
          color: #8b9bab;
          font-size: 12px;
        }

        /* ================= CONTROLS ================= */

        .controls {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin: 12px 0;
        }

        .control-button {
          height: 38px;
          padding: 0 15px;
          border: 1px solid rgba(77, 129, 177, .35);
          background: rgba(4, 18, 35, .75);
          color: #dbe9f5;
          border-radius: 7px;
        }

        /* ================= STAT CARDS ================= */

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .stat-card {
          min-height: 174px;
          border: 1px solid rgba(69, 122, 173, .32);
          border-radius: 8px;
          padding: 18px 16px 8px;
          background:
            linear-gradient(145deg, rgba(5, 22, 43, .95), rgba(3, 15, 30, .92));
          position: relative;
          overflow: hidden;
        }

        .stat-title {
          color: #aab9c9;
          font-size: 12px;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          margin-top: 7px;
        }

        .stat-change {
          font-size: 10px;
          margin-top: 5px;
        }

        .positive {
          color: #3be0a6;
        }

        .negative {
          color: #ff5267;
        }

        .chart {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 10px;
          height: 57px;
          display: flex;
          align-items: flex-end;
          gap: 9px;
        }

        .chart span {
          display: block;
          width: 9px;
          border-radius: 5px;
          transform: rotate(38deg);
        }

        .chart.green span { background: #26df9f; }
        .chart.purple span { background: #c34cff; }
        .chart.orange span { background: #ff9d19; }
        .chart.blue span { background: #39a5ff; }

        /* ================= SECTION CARD ================= */

        .section-card {
          border: 1px solid rgba(70, 122, 170, .32);
          border-radius: 9px;
          background:
            linear-gradient(145deg, rgba(4, 22, 42, .94), rgba(2, 14, 28, .96));
        }

        .section-title {
          font-size: 15px;
          font-weight: 600;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .view-all {
          border: 0;
          background: none;
          color: #28cfff;
          font-size: 11px;
        }

        /* ================= QUICK ACTIONS ================= */

        .quick {
          margin-top: 10px;
          padding: 12px;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
          margin-top: 12px;
        }

        .quick-button {
          min-height: 68px;
          border: 1px solid rgba(63, 120, 169, .35);
          border-radius: 6px;
          color: #edf8ff;
          background: rgba(6, 25, 47, .75);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 11px;
        }

        .quick-button:hover {
          border-color: #16d4c9;
          transform: translateY(-1px);
        }

        .quick-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 200, 180, .13);
          color: #36e5c5;
          font-size: 17px;
        }

        /* ================= TWO COLUMN ================= */

        .main-grid {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: 12px;
          margin-top: 10px;
        }

        .ai-command {
          min-height: 229px;
          padding: 17px 21px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 75% 65%, rgba(112, 45, 255, .18), transparent 26%),
            radial-gradient(circle at 63% 50%, rgba(0, 207, 255, .10), transparent 25%),
            linear-gradient(145deg, rgba(5, 24, 47, .98), rgba(3, 14, 29, .97));
        }

        .ai-command::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          right: 40px;
          bottom: 25px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22, 214, 255, .3), rgba(127, 39, 255, .18), transparent 70%);
          filter: blur(3px);
        }

        .ai-heading {
          font-size: 20px;
          font-weight: 700;
          position: relative;
          z-index: 2;
        }

        .ai-heading span {
          color: #25dff3;
        }

        .ai-desc {
          color: #a9b9ca;
          font-size: 12px;
          margin-top: 8px;
          position: relative;
          z-index: 2;
        }

        .command-row {
          display: flex;
          margin-top: 15px;
          position: relative;
          z-index: 4;
        }

        .command-row input {
          flex: 1;
          min-width: 0;
          height: 52px;
          border: 1px solid rgba(77, 128, 174, .35);
          border-radius: 7px 0 0 7px;
          background: rgba(1, 12, 26, .72);
          color: white;
          outline: none;
          padding: 0 13px;
        }

        .mic-button {
          width: 48px;
          border: 1px solid rgba(69, 128, 176, .35);
          background: #071d35;
          color: #25d7ef;
        }

        .send-button {
          width: 52px;
          border: 0;
          border-radius: 0 7px 7px 0;
          background: linear-gradient(145deg, #1be2d2, #2475ff);
          color: white;
          font-size: 20px;
        }

        .suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 15px;
          position: relative;
          z-index: 5;
        }

        .suggestion {
          border: 1px solid rgba(78, 123, 169, .35);
          border-radius: 6px;
          background: rgba(5, 23, 43, .7);
          color: #d2dfeb;
          padding: 7px 10px;
          font-size: 10px;
        }

        /* ================= MISSIONS ================= */

        .missions {
          min-height: 229px;
          padding: 17px 11px;
        }

        .mission {
          min-height: 58px;
          border: 1px solid rgba(66, 113, 157, .28);
          border-radius: 7px;
          background: rgba(4, 20, 38, .7);
          margin-top: 9px;
          padding: 10px;
          display: grid;
          grid-template-columns: 30px 1fr 75px;
          gap: 9px;
          align-items: center;
        }

        .mission-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 218, 183, .12);
          color: #25e0b6;
        }

        .mission:nth-child(3) .mission-icon {
          color: #9e55ff;
          background: rgba(137, 48, 255, .12);
        }

        .mission:nth-child(4) .mission-icon {
          color: #ffa31b;
          background: rgba(255, 146, 23, .12);
        }

        .mission-name {
          font-size: 11px;
          margin-bottom: 7px;
        }

        .progress {
          height: 5px;
          border-radius: 5px;
          background: #102b43;
          overflow: hidden;
        }

        .progress span {
          height: 100%;
          display: block;
          border-radius: inherit;
          background: #22d9a4;
        }

        .mission:nth-child(3) .progress span {
          background: #9b42ff;
        }

        .mission:nth-child(4) .progress span {
          background: #ff9f16;
        }

        .mission-status {
          text-align: right;
          font-size: 9px;
          color: #44d9b4;
        }

        .mission-status small {
          display: block;
          color: #b8c6d2;
          font-size: 9px;
          margin-top: 8px;
        }

        /* ================= LOWER GRID ================= */

        .lower-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        .list-card {
          min-height: 202px;
          padding: 15px;
        }

        .list {
          margin-top: 10px;
        }

        .list-row {
          min-height: 34px;
          border-bottom: 1px solid rgba(65, 106, 142, .18);
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
        }

        .list-row:last-child {
          border-bottom: 0;
        }

        .list-icon {
          width: 20px;
          min-width: 20px;
          text-align: center;
          color: #25d7d1;
        }

        .list-text {
          flex: 1;
          color: #c9d5df;
        }

        .list-time {
          color: #77899b;
          font-size: 8px;
          white-space: nowrap;
        }

        .notification .list-icon {
          color: #ef4763;
        }

        .customer-avatar {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #183b60;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #cfeaff;
          font-size: 9px;
        }

        .customer-money {
          color: #38d9ae;
          font-size: 9px;
        }

        /* ================= INSIGHTS ================= */

        .insights {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 85% 75%, rgba(192, 50, 255, .19), transparent 32%),
            linear-gradient(145deg, rgba(5, 23, 45, .97), rgba(13, 12, 45, .97));
        }

        .insight-text {
          color: #b6c5d4;
          font-size: 11px;
          line-height: 1.7;
          margin-top: 20px;
        }

        .insight-text strong {
          color: #28d9aa;
        }

        .insight-button {
          margin-top: 13px;
          padding: 8px 10px;
          border: 1px solid rgba(43, 123, 185, .4);
          border-radius: 6px;
          background: rgba(3, 23, 44, .75);
          color: #36cfff;
          font-size: 10px;
        }

        .insight-glow {
          position: absolute;
          right: 20px;
          bottom: 17px;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: radial-gradient(circle, #d44cff 0, rgba(212, 76, 255, .18) 30%, transparent 70%);
          box-shadow: 0 0 35px rgba(190, 60, 255, .4);
        }

        /* ================= BOTTOM ================= */

        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        .package,
        .industries {
          min-height: 204px;
          padding: 15px;
        }

        .package-plan {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          padding: 10px;
          border: 1px solid rgba(60, 112, 160, .25);
          border-radius: 6px;
        }

        .diamond {
          color: #25e2d4;
          font-size: 24px;
        }

        .package-name {
          font-weight: 600;
          font-size: 14px;
          flex: 1;
        }

        .package-price {
          color: #1ce2ce;
          font-size: 11px;
        }

        .access {
          display: flex;
          justify-content: space-between;
          color: #a5b4c4;
          font-size: 10px;
          margin-top: 15px;
        }

        .access strong {
          color: #34e2c2;
        }

        .access-bar {
          height: 5px;
          border-radius: 5px;
          background: #102940;
          margin-top: 7px;
          overflow: hidden;
        }

        .access-bar span {
          display: block;
          width: 63%;
          height: 100%;
          background: #20d9bf;
        }

        .upgrade-button {
          width: 100%;
          height: 37px;
          margin-top: 13px;
        }

        .feature-link {
          display: block;
          text-align: center;
          color: #28d4e8;
          font-size: 10px;
          margin-top: 10px;
        }

        .industry-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 7px;
          margin-top: 13px;
        }

        .industry {
          min-height: 57px;
          border: 1px solid rgba(61, 113, 162, .3);
          border-radius: 6px;
          background: rgba(5, 23, 43, .7);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-size: 8px;
          text-align: center;
        }

        .industry-icon {
          color: #19d6c2;
          font-size: 18px;
        }

        .industry:first-child {
          border-color: #14d8b8;
          background: rgba(0, 212, 181, .08);
        }

        /* ================= FOOTER ================= */

        .footer {
          min-height: 54px;
          margin: 18px -28px 0;
          border-top: 1px solid rgba(66, 108, 145, .2);
          background: rgba(2, 10, 20, .75);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          color: #77899b;
          font-size: 10px;
        }

        .footer-links {
          display: flex;
          gap: 25px;
        }

        .footer a:hover {
          color: #27d9d0;
        }

        /* ================= MOBILE ================= */

        .overlay {
          display: none;
        }

        @media (max-width: 1100px) {
          .sidebar {
            width: 230px;
            min-width: 230px;
          }

          .main {
            width: calc(100% - 230px);
            margin-left: 230px;
            padding-left: 18px;
            padding-right: 18px;
          }

          .lower-grid {
            grid-template-columns: 1fr 1fr;
          }

          .top-button {
            padding: 0 10px;
          }

          .profile-text {
            display: none;
          }
        }

        @media (max-width: 850px) {
          .sidebar {
            transform: translateX(-100%);
            transition: transform .25s ease;
            width: 270px;
            min-width: 270px;
            box-shadow: 15px 0 45px rgba(0,0,0,.45);
          }

          .sidebar.mobile-open {
            transform: translateX(0);
          }

          .overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 5, 12, .62);
            z-index: 90;
          }

          .main {
            width: 100%;
            margin-left: 0;
            padding: 10px 12px 0;
          }

          .mobile-menu {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(65, 123, 174, .35);
            background: rgba(5, 24, 43, .8);
            color: #fff;
            border-radius: 7px;
            font-size: 22px;
          }

          .topbar {
            gap: 7px;
          }

          .search-box {
            height: 44px;
          }

          .top-button {
            height: 44px;
            padding: 0 10px;
            font-size: 11px;
          }

          .top-button.ai {
            font-size: 0;
            width: 44px;
          }

          .top-button.ai:first-letter {
            font-size: 18px;
          }

          .profile {
            display: none;
          }

          .hero {
            min-height: 280px;
          }

          .stats {
            grid-template-columns: 1fr 1fr;
          }

          .quick-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .main-grid {
            grid-template-columns: 1fr;
          }

          .bottom-grid {
            grid-template-columns: 1fr;
          }

          .footer {
            margin-left: -12px;
            margin-right: -12px;
          }
        }

        @media (max-width: 600px) {
          .topbar {
            height: auto;
            flex-wrap: wrap;
          }

          .mobile-menu {
            order: 0;
          }

          .search-box {
            order: 1;
            flex: 1;
            max-width: none;
          }

          .top-button {
            order: 2;
          }

          .top-icon {
            display: none;
          }

          .hero {
            min-height: 290px;
            padding: 23px 18px;
          }

          .hero-title {
            font-size: 22px;
          }

          .hero-subtitle {
            font-size: 12px;
            max-width: 270px;
            line-height: 1.5;
          }

          .pulse {
            left: 18px;
            right: 18px;
            bottom: 18px;
            min-width: 0;
            width: auto;
          }

          .pulse-title {
            font-size: 12px;
          }

          .pulse-score {
            font-size: 23px;
          }

          .controls {
            justify-content: stretch;
          }

          .control-button {
            flex: 1;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .stat-card {
            min-height: 135px;
          }

          .quick-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .quick-button:last-child {
            grid-column: span 2;
          }

          .lower-grid {
            grid-template-columns: 1fr;
          }

          .industry-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .footer {
            flex-direction: column;
            gap: 10px;
            padding: 14px;
          }

          .footer-links {
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 390px) {
          .main {
            padding-left: 8px;
            padding-right: 8px;
          }

          .search-box {
            font-size: 11px;
          }

          .top-button {
            display: none;
          }

          .hero {
            min-height: 300px;
          }

          .pulse {
            gap: 7px;
          }

          .pulse-title {
            font-size: 10px;
          }

          .excellent {
            font-size: 9px;
            padding: 5px;
          }

          .pulse-score {
            font-size: 20px;
          }

          .quick-grid {
            gap: 6px;
          }

          .mission {
            grid-template-columns: 28px 1fr 55px;
          }
        }
      `}</style>

      <div className="dashboard-shell">

        {mobileOpen && (
          <button
            className="overlay"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* =========================================================
            SIDEBAR
            NEXT STEP: Sidebar navigation functionality will be
            connected here after the visual design is locked.
        ========================================================= */}
        <aside className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}>

          <div className="brand">
            <div className="brand-logo">◇</div>
            <div>
              <div className="brand-name">BRIQONA OS</div>
              <div className="brand-subtitle">
                All-in-One Business Operating System
              </div>
            </div>
          </div>

          <nav className="nav">
            {menu.map((item, index) => (
              <button
                key={item[1]}
                className={`nav-item ${index === 0 ? "active" : ""}`}
                onClick={() => {
                  if (index !== 0) alert(`${item[1]} module selected`);
                  setMobileOpen(false);
                }}
              >
                <span className="nav-icon">{item[0]}</span>
                <span className="nav-label">{item[1]}</span>
                {item[2] && (
                  <span className="nav-badge">
                    {item[2]}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="plan-card">
            <button className="plan-close">×</button>
            <div className="plan-small">Current Plan</div>
            <div className="plan-name">◇ Growth</div>
            <div className="plan-price">$15 / month</div>
            <button
              className="plan-button"
              onClick={() => alert("Upgrade Plan")}
            >
              Upgrade Plan →
            </button>
          </div>
        </aside>

        <main className="main">

          {/* =======================================================
              HEADER
              NEXT STEP: Header real search/notifications/profile
              functionality will be connected here.
          ======================================================= */}
          <header className="topbar">

            <button
              className="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open navigation"
            >
              {mobileOpen ? "×" : "☰"}
            </button>

            <div className="search-box">
              <span>⌕</span>
              <input
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") runCommand();
                }}
                placeholder="Ask Briqona AI or type a command..."
              />
              <span className="shortcut">⌘ K</span>
            </div>

            <button
              className="top-button ai"
              onClick={() => alert("AI Copilot opened")}
            >
              ✨ AI Copilot
            </button>

            <button
              className="top-button"
              onClick={() => alert("AI Mission Center opened")}
            >
              ✦ AI Mission Center
            </button>

            <button
              className="top-icon"
              onClick={() => alert("Notifications opened")}
            >
              ♧
              <span className="notification-count">5</span>
            </button>

            <button
              className="top-icon"
              onClick={() => alert("Messages opened")}
            >
              ▢
              <span className="notification-count" style={{ background: "#168fe5" }}>
                3
              </span>
            </button>

            <div className="profile">
              <div className="profile-text">
                <div className="profile-name">Ali Raza</div>
                <div className="profile-role">Owner</div>
              </div>
              <div className="avatar">👨🏻</div>
              <span>⌄</span>
            </div>
          </header>

          {/* =======================================================
              HERO
              FINAL MOCKUP SECTION
          ======================================================= */}
          <section className="hero">

            <div className="hero-content">
              <h1 className="hero-title">
                Good morning, Ali Raza! 👋
              </h1>

              <div className="hero-subtitle">
                Here's what's happening with your business today.
              </div>
            </div>

            <div className="pulse">
              <div className="pulse-title">✦ AI Business Pulse</div>
              <div className="excellent">Excellent</div>
              <div className="pulse-score">
                87 <small>/100</small>
              </div>
            </div>
          </section>

          <div className="controls">
            <select
              className="control-button"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
              <option>Last Year</option>
            </select>

            <button
              className="control-button"
              onClick={() => alert("Dashboard customization")}
            >
              ✣ Customize
            </button>
          </div>

          {/* =======================================================
              STATISTICS
              NEXT STEP: Real business data/API will replace these
              static numbers.
          ======================================================= */}
          <section className="stats">

            <div className="stat-card">
              <div className="stat-title">Total Revenue</div>
              <div className="stat-value">$24,780</div>
              <div className="stat-change positive">▲ 12.6% vs last month</div>
              <div className="chart green">
                {[30, 18, 43, 28, 54, 39, 63, 47, 70, 55].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">Total Profit</div>
              <div className="stat-value">$8,430</div>
              <div className="stat-change positive">▲ 8.3% vs last month</div>
              <div className="chart purple">
                {[22, 45, 35, 60, 43, 66, 54, 72, 61, 78].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">Total Expenses</div>
              <div className="stat-value">$6,350</div>
              <div className="stat-change negative">▼ -3.4% vs last month</div>
              <div className="chart orange">
                {[28, 45, 32, 63, 44, 57, 36, 61, 45, 68].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">Open Invoices</div>
              <div className="stat-value">23</div>
              <div className="stat-change negative">$14,560 overdue</div>
              <div className="chart blue">
                {[18, 33, 47, 30, 59, 50, 72, 43, 60, 48].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

          </section>

          {/* QUICK ACTIONS */}
          <section className="section-card quick">
            <div className="section-title">Quick Actions</div>

            <div className="quick-grid">
              {quickActions.map(([icon, name]) => (
                <button
                  key={name}
                  className="quick-button"
                  onClick={() => quickAction(name)}
                >
                  <span className="quick-icon">{icon}</span>
                  <span>+ {name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* AI AREA */}
          <section className="main-grid">

            <div className="section-card ai-command">
              <div className="ai-heading">
                <span>✦</span> AI Command Center
              </div>

              <div className="ai-desc">
                Ask anything. Briqona AI is ready to help.
              </div>

              <div className="command-row">
                <input
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") runCommand();
                  }}
                  placeholder="e.g. Show me sales trend, top customers, overdue invoices..."
                />

                <button
                  className="mic-button"
                  onClick={() => alert("Voice input")}
                >
                  ♫
                </button>

                <button
                  className="send-button"
                  onClick={runCommand}
                >
                  ➤
                </button>
              </div>

              <div className="suggestions">
                {[
                  "Sales Summary",
                  "Overdue Invoices",
                  "Cash Flow",
                  "Inventory Alert",
                  "HR Report",
                ].map((x) => (
                  <button
                    className="suggestion"
                    key={x}
                    onClick={() => setCommand(x)}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>

            <div className="section-card missions">
              <div className="section-header">
                <div className="section-title">✦ AI Missions <small style={{ color: "#c14cff" }}>Beta</small></div>
                <button className="view-all">View All</button>
              </div>

              {missions.map(([icon, name, status, percent]) => (
                <div className="mission" key={name}>
                  <div className="mission-icon">{icon}</div>

                  <div>
                    <div className="mission-name">{name}</div>
                    <div className="progress">
                      <span style={{ width: percent }} />
                    </div>
                  </div>

                  <div className="mission-status">
                    {status}
                    <small>{percent}</small>
                  </div>
                </div>
              ))}
            </div>

          </section>

          {/* LOWER CARDS */}
          <section className="lower-grid">

            <div className="section-card list-card">
              <div className="section-header">
                <div className="section-title">Recent Activities</div>
                <button className="view-all">View All</button>
              </div>

              <div className="list">
                {activities.map(([icon, text, time]) => (
                  <div className="list-row" key={text}>
                    <span className="list-icon">{icon}</span>
                    <span className="list-text">{text}</span>
                    <span className="list-time">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card list-card">
              <div className="section-header">
                <div className="section-title">Notifications</div>
                <button className="view-all">View All</button>
              </div>

              <div className="list notification">
                {notifications.map(([icon, text, time]) => (
                  <div className="list-row" key={text}>
                    <span className="list-icon">{icon}</span>
                    <span className="list-text">{text}</span>
                    <span className="list-time">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card list-card">
              <div className="section-header">
                <div className="section-title">Top Customers</div>
                <button className="view-all">View All</button>
              </div>

              <div className="list">
                {customers.map(([letter, name, money]) => (
                  <div className="list-row" key={name}>
                    <span className="customer-avatar">{letter}</span>
                    <span className="list-text">{name}</span>
                    <span className="customer-money">{money}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card list-card insights">
              <div className="section-header">
                <div className="section-title">✦ AI Insights</div>
                <span className="nav-badge">New</span>
              </div>

              <div className="insight-text">
                Your sales are up <strong>12.6%</strong> this month.
                <br />
                Focus on recovering <strong>$14,560</strong> in overdue
                invoices to improve cash flow.
              </div>

              <button
                className="insight-button"
                onClick={() => alert("AI Insights opened")}
              >
                View All Insights →
              </button>

              <div className="insight-glow" />
            </div>

          </section>

          {/* BOTTOM */}
          <section className="bottom-grid">

            <div className="section-card package">
              <div className="section-header">
                <div className="section-title">Package & Access</div>
              </div>

              <div className="package-plan">
                <span className="diamond">◇</span>
                <span className="package-name">Growth Plan</span>
                <span className="package-price">$15 / month</span>
              </div>

              <div className="access">
                <span>Access</span>
                <strong>38 / 60 Features</strong>
              </div>

              <div className="access-bar">
                <span />
              </div>

              <button
                className="upgrade-button"
                onClick={() => alert("Upgrade to Pro")}
              >
                🚀 Upgrade to Pro
              </button>

              <button
                className="feature-link"
                onClick={() => alert("All features")}
              >
                View All Features →
              </button>
            </div>

            <div className="section-card industries">
              <div className="section-header">
                <div className="section-title">Industries Hub</div>
                <button className="view-all">Manage</button>
              </div>

              <div className="industry-grid">
                {industries.map(([icon, name]) => (
                  <button
                    className="industry"
                    key={name}
                    onClick={() => alert(`${name} industry selected`)}
                  >
                    <span className="industry-icon">{icon}</span>
                    <span>{name}</span>
                  </button>
                ))}
              </div>
            </div>

          </section>

          {/* =======================================================
              FOOTER
              NEXT STEP: Real Privacy / Terms / Support routes
              will be connected here.
          ======================================================= */}
          <footer className="footer">
            <span>© 2026 Briqona OS. All rights reserved.</span>

            <span>Version 1.0.0</span>

            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#support">Support</a>
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
