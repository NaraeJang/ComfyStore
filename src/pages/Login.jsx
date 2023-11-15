import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { loginUser } from "../features/user/userSlice";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);

      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials.";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginAGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      return navigate("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "guest user login error. please try it again.";
      toast.error(errorMessage);
      return null;
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 sm:shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput label="email" name="identifier" type="email" />
        <FormInput label="password" name="password" type="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAGuestUser}>
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize ">
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
