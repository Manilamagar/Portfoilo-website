function Form(){
    return(
       <div classname="flex items-center justify-center p-12">
  {'{'}/* Author: FormBold Team */{'}'}
  <div classname="mx-auto w-full max-w-[550px] bg-white">
    <div classname="my-6 border-t border-gray-300 relative">
      <form> 
        <div classname="mb-5">
          <label htmlfor="name" classname="mb-3 block text-base font-medium text-[#07074D]">
            Full Name
          </label>
          <input type="text" name="name" id="name" placeholder="Full Name" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div classname="mb-5">
          <label htmlfor="phone" classname="mb-3 block text-base font-medium text-[#07074D]">
            Phone Number
          </label>
          <input type="text" name="phone" id="phone" placeholder="Enter your phone number" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div classname="mb-5">
          <label htmlfor="email" classname="mb-3 block text-base font-medium text-[#07074D]">
            Email Address
          </label>
          <input type="email" name="email" id="email" placeholder="Enter your email" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div classname="-mx-3 flex flex-wrap">
          <div classname="w-full px-3 sm:w-1/2">
            <div classname="mb-5">
              <label htmlfor="date" classname="mb-3 block text-base font-medium text-[#07074D]">
                Date
              </label>
              <input type="date" name="date" id="date" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
          </div>
          <div classname="w-full px-3 sm:w-1/2">
            <div classname="mb-5">
              <label htmlfor="time" classname="mb-3 block text-base font-medium text-[#07074D]">
                Time
              </label>
              <input type="time" name="time" id="time" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
          </div>
        </div>
        <div classname="mb-5 pt-3">
          <label classname="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
            Address Details
          </label>
          <div classname="-mx-3 flex flex-wrap">
            <div classname="w-full px-3 sm:w-1/2">
              <div classname="mb-5">
                <input type="text" name="area" id="area" placeholder="Enter area" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
            <div classname="w-full px-3 sm:w-1/2">
              <div classname="mb-5">
                <input type="text" name="city" id="city" placeholder="Enter city" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
            <div classname="w-full px-3 sm:w-1/2">
              <div classname="mb-5">
                <input type="text" name="state" id="state" placeholder="Enter state" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
            <div classname="w-full px-3 sm:w-1/2">
              <div classname="mb-5">
                <input type="text" name="post-code" id="post-code" placeholder="Post Code" classname="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button classname="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    )
}
export default Form