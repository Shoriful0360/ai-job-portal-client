import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UseAxios from '../../Utility/UseAxios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../shared/LoadingSpinner';
import useRole from '../../Utility/useRole';

const AddressForm = ({ setVisible }) => {
  const axiosPublic=UseAxios()
  const{role,isLoading,refetch}=useRole()
  if(isLoading) return <LoadingSpinner/>
  const{permanentAddress,presentAddress}= role || {}
  
  const{user}=useSelector((state)=>state.auth)
  const [countries, setCountries] = useState([]);
  const [presentDistricts, setPresentDistricts] = useState([]);
  const [permanentDistricts, setPermanentDistricts] = useState([]);


  const [present, setPresent] = useState({
    country: presentAddress?.country,
    district: presentAddress?.district,
    street: presentAddress?.street
  });

  const [permanent, setPermanent] = useState({
    country: permanentAddress?.country,
    district: permanentAddress?.district,
    street: permanentAddress?.street
  });

  const [sameAsPresent, setSameAsPresent] = useState(false);

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get('https://countriesnow.space/api/v0.1/countries/positions');
        const countryNames = res.data.data.map((c) => c.name).sort();
        setCountries(countryNames);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCountries();
  }, []);

  // Fetch present districts
  useEffect(() => {
    if (!present.country) return;
    const fetchDistricts = async () => {
      try {
        const res = await axios.post('https://countriesnow.space/api/v0.1/countries/states', {
          country: present.country
        });
        const states = res.data.data.states.map((s) => s.name).sort();
        setPresentDistricts(states);

        // If sameAsPresent is ON, copy districts to permanent
        if (sameAsPresent) {
          setPermanentDistricts(states);
          setPermanent((prev) => ({
            ...prev,
            country: present.country,
            district: present.district,
            street: present.street
          }));
        }
      } catch (err) {
        console.error(err);
        setPresentDistricts([]);
      }
    };
    fetchDistricts();
  }, [present.country, sameAsPresent]);

  // Fetch permanent districts if NOT same as present
  useEffect(() => {
    if (!permanent.country || sameAsPresent) return;
    const fetchDistricts = async () => {
      try {
        const res = await axios.post('https://countriesnow.space/api/v0.1/countries/states', {
          country: permanent.country
        });
        setPermanentDistricts(res.data.data.states.map((s) => s.name).sort());
      } catch (err) {
        console.error(err);
        setPermanentDistricts([]);
      }
    };
    fetchDistricts();
  }, [permanent.country, sameAsPresent]);

  const handleSameAsPresentChange = () => {
    const checked = !sameAsPresent;
    setSameAsPresent(checked);

    if (checked) {
      setPermanent({ ...present });
      setPermanentDistricts([...presentDistricts]);
    } else {
      setPermanent({ country: '', district: '', street: '' });
      setPermanentDistricts([]);
    }
  };



  const handleSubmit =async(e) => {
  
    e.preventDefault();
  
    const addressInfo = {
      presentAddress: present,
      permanentAddress: sameAsPresent ? present : permanent
    };
    try{
       const res= await axiosPublic.post(`/update-user/${user?.email}`,addressInfo)
       if (res.data.modifiedCount > 0){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Information is Update",
          showConfirmButton: false,
          timer: 1200
        });
        refetch()
        setVisible(false)
       }
     
            
    }catch(error){
      const errorMessage=error.message
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: {errorMessage},
        showConfirmButton: false,
        timer: 1200
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6  mx-auto p-6 bg-[#1f152a]  text-white rounded-xl shadow-lg"
      encType="multipart/form-data"
    >
      {/* Present Address */}
      <div>
        <h3 className="text-lg font-semibold text-orange-400 mb-4">Present Address</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">🌐 Select Country</label>
            <select
              className="w-full bg-gray-800 p-2 rounded-md"
              defaultValue={presentAddress?presentAddress?.country:"None"}
              
              onChange={(e) =>
                setPresent({ ...present, country: e.target.value, district: '' })
              }
            >
              <option value="">{presentAddress?presentAddress?.country:"-- Select Country --"}</option>
              {countries?.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2">📌 Select District</label>
            <select
              className="w-full bg-gray-800 p-2 rounded-md"
              defaultValue={presentAddress?presentAddress?.district :"None"}
              value={present.district}
              onChange={(e) => setPresent({ ...present, district: e.target.value })}
            >
              <option value="">{presentAddress?presentAddress?.district :"-- Select District --"}</option>
              {presentDistricts?.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2">🏠 Street Address</label>
          <input
            className="w-full bg-gray-800 p-2 rounded-md"
            defaultValue={presentAddress?presentAddress?.street: "None"}
         
            onChange={(e) => setPresent({ ...present, street: e.target.value })}
          />
        </div>
      </div>

      {/* Permanent Address */}
      <div>
        <h3 className="text-lg font-semibold text-orange-400 mb-4">Permanent Address</h3>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            className="form-checkbox text-purple-500 mr-2"
            checked={sameAsPresent}
            onChange={handleSameAsPresentChange}
          />
          Current address and permanent address are the same
        </label>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">🌐 Select Country</label>
            <select
              className="w-full bg-gray-800 p-2 rounded-md"
              defaultValue={permanentAddress?permanentAddress?.country:"None"}
              value={permanent?.country}
              onChange={(e) =>
                setPermanent({ ...permanent, country: e.target.value, district: '' })
              }
              disabled={sameAsPresent}
            >
              <option value="">{permanentAddress?.country?permanentAddress?.country:"-- Select Country --"}</option>
              {countries?.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2">📌 Select District</label>
            <select
              className="w-full bg-gray-800 p-2 rounded-md"
              defaultValue={permanentAddress?.district?permanentAddress?.district :"None"}
              value={permanent.district}
              onChange={(e) => setPermanent({ ...permanent, district: e.target.value })}
              disabled={sameAsPresent}
            >
              <option value="">{permanentAddress?.district?permanentAddress?.district :"-- Select District --"}</option>
              {permanentDistricts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2">🏠 Street Address</label>
          <input
            className="w-full bg-gray-800 p-2 rounded-md"
          defaultValue={permanentAddress?permanentAddress?.street: "None"}
          value={permanent.street}
            onChange={(e) => setPermanent({ ...permanent, street: e.target.value })}
            disabled={sameAsPresent}
          />
        </div>
      </div>

   

      {/* Buttons */}
      <div className="flex justify-end gap-4 pt-2">
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
