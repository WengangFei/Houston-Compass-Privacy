import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[10px_1fr_10px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
       <h1>Privacy Policy</h1>
        <p>This application uses Facebook and Instagram login to authenticate users.</p>
        <p>We do not store, share, or sell your personal information.</p>
        <p>Any access tokens received during login are used only to verify your identity and are not saved permanently.</p>
        <p>If you wish to have your information deleted, please contact us at <b>your-email@example.com</b>.</p>
      </div>
  );
}
