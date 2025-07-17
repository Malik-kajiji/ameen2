import { useState } from "react";
import { loginAdmin } from "../lib/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginAdmin({ username, password });
      console.log("نجاح:", result);
      localStorage.setItem("token", result.token);
    } catch (err) {
      console.error(err);
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="اسم المستخدم"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">دخول</button>
      {error && <p>{error}</p>}
    </form>
  );
}
