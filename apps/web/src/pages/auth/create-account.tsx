import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { UserCreateSchema } from "~/server/api/schemas";
import { useZodForm } from "~/utils";
import { api } from "~/utils/api";

const CreateAccount: NextPage = () => {
  const router = useRouter();

  const user = api.user.create.useMutation();
  const methods = useZodForm({
    schema: UserCreateSchema,
  });

  return (
    <>
      <Head>
        <title>Create Account</title>
        <meta name="description" content="Create Your Empathy Account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Sign <span className="text-[hsl(280,100%,70%)]">In</span>
          </h1>
          <form
            className="form-control w-full max-w-xs space-y-4"
            onSubmit={methods.handleSubmit(async (values) => {
              await user.mutateAsync(values);
              router.push("/");
            })}
          >
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...methods.register("email")}
              />
              <span className="text-xs text-red-500">
                {methods.formState.errors.email?.message}
              </span>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...methods.register("password")}
              />
              <span className="text-xs text-red-500">
                {methods.formState.errors.password?.message}
              </span>
            </div>
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateAccount;
