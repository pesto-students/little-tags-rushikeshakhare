import { IAddress } from "../models/address";
import { useLocalStorage } from "./useLocalStorage";
import { USER_ADDRESSES_STORAGE_KEY } from "../AppConfig";

export const useAddress = () => {
  const [addresses, setAddresses] = useLocalStorage(
    USER_ADDRESSES_STORAGE_KEY,
    []
  );

  const addAddress = (address: IAddress) => {
    if (addresses.length === 0) address.isDefault = true;
    addresses.push(address);
    setAddresses(addresses);
  };

  const setDefaultAddress = (addressId: string) => {
    let result = addresses.map((address: IAddress) => {
      if (address.id === addressId) address.isDefault = true;
      else address.isDefault = false;
      return address;
    });
    setAddresses(result);
  };

  const deleteAddress = (address: IAddress) => {
    const filteredAddresses = addresses.filter(
      (item: IAddress) => item.id !== address.id
    );
    setAddresses(filteredAddresses);
  };

  const clearAll = () => {
    setAddresses([]);
  };

  return { addresses, addAddress, setDefaultAddress, deleteAddress, clearAll };
};
