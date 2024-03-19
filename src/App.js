import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {

const [amount,setAmount]=useState(0);
const [from,setFrom] =useState("usd");
const [to,setTo]=useState("inr");
const [convertedAmount,setConvertedAmount]=useState(0);

const currencyInfo=useCurrencyInfo(from);
const options=Object.keys[currencyInfo];

//implement swap
const swap=()=>{
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);

}

const convert=()=>{
  setConvertedAmount(amount*useCurrencyInfo[to]);
}


  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhd%2520background%2F&psig=AOvVaw1uU6rqEL5kmXkUgxwHuWsP&ust=1710962147426000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCMye6EgYUDFQAAAAAdAAAAABAE')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOption={options}
                        onCurrencyChange={(currency)=>setAmount(amount)}
                        selectCurrency={from}
                        onAmountChange={(amount)=>setAmount(amount)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                       label="To"
                       amount={convertedAmount}
                       currencyOption={options}
                       onCurrencyChange={(currency)=>setTo(currency)}
                       selectCurrency={from}
                       amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  );
}

export default App;
