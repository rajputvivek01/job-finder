// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../redux/authSlice';
// import { useState } from 'react';

// function Setting() {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const [email, setEmail] = useState(user?.email || '');
//   const [notifications, setNotifications] = useState(true);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     alert('Settings saved (simulate API call)');
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-indigo-700">Account Settings</h2>

//       <form onSubmit={handleSave} className="space-y-6">
//         <div>
//           <label className="block text-gray-700 mb-1">Username</label>
//           <input
//             type="text"
//             value={user?.username || ''}
//             readOnly
//             className="w-full p-3 border rounded bg-gray-100 cursor-not-allowed"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             className="w-full p-3 border rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <span className="text-gray-700">Enable Notifications</span>
//           <label className="inline-flex relative items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only peer"
//               checked={notifications}
//               onChange={() => setNotifications(!notifications)}
//             />
//             <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 peer-focus:ring-4 peer-focus:ring-indigo-300 transition-all"></div>
//             <span className="ml-3 text-sm font-medium text-gray-900">
//               {notifications ? 'On' : 'Off'}
//             </span>
//           </label>
//         </div>

//         <div className="flex justify-between items-center">
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Save Changes
//           </button>
//           <button
//             type="button"
//             onClick={handleLogout}
//             className="text-red-500 hover:underline"
//           >
//             Logout
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Setting;
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Setting() {
  const user = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState(user?.email || '');
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved (simulate API call)');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-indigo-700">Account Settings</h2>

      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={user?.username || ''}
            readOnly
            className="w-full p-3 border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700">Enable Notifications</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 peer-focus:ring-4 peer-focus:ring-indigo-300 transition-all"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              {notifications ? 'On' : 'Off'}
            </span>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Setting;
