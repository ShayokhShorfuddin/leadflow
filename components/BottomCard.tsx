import { DialogButton } from "./Navbar";

export default function BottomCard() {
  return (
    <section className="container mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center border border-gray-200 rounded-xl p-5 md:p-12">
        <h1 className="text-2xl md:text-3xl font-ubuntu leading-snug md:w-96">
          We deliver real results and drive your business forward.
        </h1>

        <div className="flex flex-col justify-center">
          <p className="text-start text-gray-600 md:w-96 mb-5 mt-5">
            Book a free consultation to find out how Leadflow can help you get
            the results you are after.
          </p>

          <DialogButton className=""/>
        </div>
      </div>
    </section>
  );
}
