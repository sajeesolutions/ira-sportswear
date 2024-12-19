import React, { useState } from 'react';

function PriceEstimator() {
  const [collarType, setCollarType] = useState('Round');
  const [fabric, setFabric] = useState('Interlock');
  const [sleeveLength, setSleeveLength] = useState('Quarter Sleeve');
  const [quantity, setQuantity] = useState(15);
  const pricePerUnit = 20;

  const handleCollarChange = (event) => {
    setCollarType(event.target.value);
  };

  const handleFabricChange = (event) => {
    setFabric(event.target.value);
  };

  const handleSleeveLengthChange = (event) => {
    setSleeveLength(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const totalPrice = quantity * pricePerUnit;

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Price Estimator</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-2">Select Collar Type</h3>
          <div className="grid grid-cols-3 gap-4">
            <button
              className={`bg-white border rounded-md p-2 ${
                collarType === 'Polo' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setCollarType('Polo')}
            >
              Polo
            </button>
            <button
              className={`bg-white border rounded-md p-2 ${
                collarType === 'Rib' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setCollarType('Rib')}
            >
              Rib
            </button>
            <button
              className={`bg-white border rounded-md p-2 ${
                collarType === 'Mandarin' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setCollarType('Mandarin')}
            >
              Mandarin
            </button>
            <button
              className={`bg-white border rounded-md p-2 ${
                collarType === 'Insert' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setCollarType('Insert')}
            >
              Insert
            </button>
            <button
              className={`bg-white border rounded-md p-2 ${
                collarType === 'Round' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setCollarType('Round')}
            >
              Round
            </button>
            <button
              className={`bg-white border rounded-md p-2 ${
                collarType === 'Zip Up' ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setCollarType('Zip Up')}
            >
              Zip Up
            </button>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-2">Fabric</h3>
          <select
            className="bg-white border rounded-md p-2"
            value={fabric}
            onChange={handleFabricChange}
          >
            <option value="Interlock">Interlock</option>
            {/* Add more fabric options here */}
          </select>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-2">Sleeve Length</h3>
          <select
            className="bg-white border rounded-md p-2"
            value={sleeveLength}
            onChange={handleSleeveLengthChange}
          >
            <option value="Quarter Sleeve">Quarter Sleeve</option>
            {/* Add more sleeve length options here */}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Quantity</h3>
          <select
            className="bg-white border rounded-md p-2"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {/* Add quantity options here */}
          </select>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Item Price</h3>
          <p className="text-2xl font-bold">$ {totalPrice}</p>
          <p className="text-sm text-gray-500">* excludes taxes, shipping and customs</p>
        </div>
      </div>

      <button className="bg-blue-500 text-white rounded-md p-2 mt-4">
        Customize Your Apparel
      </button>
    </div>
  );
}

export default PriceEstimator;