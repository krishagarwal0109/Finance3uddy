import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../contexts/TransactionContext";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const { transactions } = useContext(TransactionContext);

  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    if (transactions.length > 0) {
      const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
      setRecentTransactions(sortedTransactions.slice(0, 4));
    }
  }, [transactions]);

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="dashboard">
      <div className="animated-background"></div>

      <div className="dashboard-content">
        <h1 className="dashboard-title">Finance Management Dashboard</h1>

        <div className="cards-container">
          <div className="card animated-card">
            <h2>Transactions</h2>
            <p>View and manage your transactions</p>
            <button onClick={() => navigate("/transactions")} className="card-button">
              Go to Transactions
            </button>
          </div>
          <div className="card animated-card">
            <h2>Goals</h2>
            <p>Track your financial goals</p>
            <button onClick={() => navigate("/goals")} className="card-button">
              Manage Goals
            </button>
          </div>
          <div className="card animated-card">
            <h2>Expense Split</h2>
            <p>Split expenses with friends</p>
            <button onClick={() => navigate("/expensesplit")} className="card-button">
              Go to Expense Split
            </button>
          </div>

          <div className="card animated-card">
            <h2>Dues</h2>
            <p>Track and manage your dues</p>
            <button onClick={() => navigate("/dues")} className="card-button">
              Go to Dues
            </button>
          </div>
          <div className="card animated-card">
            <h2>View Transactions</h2>
            <p>View detailed transaction history</p>
            <button onClick={() => navigate("/viewtransaction")} className="card-button">
              View Transactions
            </button>
          </div>
          <div className="card animated-card">
            <h2>Charts</h2>
            <p>Visualize your financial data</p>
            <button onClick={() => navigate("/charts")} className="card-button">
              Go to Charts
            </button>
          </div>
          <div className="card animated-card">
            <h2>Custom Report</h2>
            <p>Generate personalized financial reports</p>
            <button onClick={() => navigate("/customreport")} className="card-button">
              Generate Report
            </button>
          </div>
          <div className="card animated-card">
            <h2>Budgeting</h2>
            <p>Plan and track your budget</p>
            <button onClick={() => navigate("/budgeting")} className="card-button">
              Manage Budget
            </button>
          </div>
        </div>

        <div className="transactions-container">
          <h2>Recent Transactions</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.type}</td>
                  <td>{tx.date}</td>
                  <td>{tx.category}</td>
                  <td>{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

