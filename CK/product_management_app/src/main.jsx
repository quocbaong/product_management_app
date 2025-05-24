import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // hoặc ./main.css nếu bạn dùng Tailwind
import { Provider } from 'react-redux';
import { store } from './store'; // ✅ đúng đường dẫn đến store.js

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>   {/* ✅ Đây là phần bắt buộc */}
      <App />
    </Provider>
  </React.StrictMode>
);
