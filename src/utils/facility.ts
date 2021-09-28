export type Facility = {
  id: string;
  createdAt: string;
  name: string;
  type: FacilityType;
  address: string;
};

export enum FacilityType {
  range = "RANGE",
  indoor = "INDOOR",
}

// TODO: Create a prefix for facilities
// 1. Test that it works
// 2. Make it scalable

export const deleteFacility = (id: string) => {
  const key: string = id;
  // Remove facility from localstorage
  localStorage.removeItem(key);
};
export const editFacility = (id: string, newFacility: Facility) => {
  const key: string = id;
  localStorage.setItem(key, JSON.stringify(newFacility));
};

export const addFacility = (facility: Facility) => {
  const key: string = facility.id;
  localStorage.setItem(key, JSON.stringify(facility));
};

export const getAllFacilities = () => {};

// Create a fake facility

export const populateLocalStoreWithFakeFacilites = (number = 10) => {
  // Create fake facilities
  const facilities = [...Array(number)].map(() => createFakeFacility());
  // Add facilities to localstorage
};

export const createFakeFacility = () => {
  const id = "id";
  const name = "";
  const createdAt = Date.UTC;
  const type = Math.floor(Math.random() + 1)
    ? FacilityType.range
    : FacilityType.indoor;
  const address = "";

  return { id, name, createdAt, type, address };
};
