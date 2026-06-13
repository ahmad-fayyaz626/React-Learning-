import { create } from "zustand";
import { persist } from "zustand/middleware";
// One problem we face in zustand that whole store subscribes to the changes in the store, so if we have a big store and we want to
// update only one part of it, it will cause unnecessary re-renders in the components that are using other parts of the store. To solve this problem, we can use the get function to get the current state of the store and then
// update only the part that we want to update.
// This way, only the components that are using that part of the store will re-render.
// for performance optimization, we can also use the subscribe function to subscribe to specific parts of the store and only re-render the components that are using those parts of the store when they change.

const useMyStore = create(
  persist(
    (set, get) => {
      return {
        name: "ahmad Fayyaz",
        age: 22,
        incrementAge: () => {
          set((state) => ({
            age: state.age + 1,
          }));
        },
        CapitializeName: () => {
          const { name } = get();
          const capitailized = name.charAt(0).toUpperCase() + name.slice(1);
          set(() => {
            return { name: capitailized };
          });
        },
      };
    },
    {
        name: "Ahmad-Fayyaz", // name of the item in the storage
      getStorage: () => sessionStorage, // Use sessionStorage for persistence
    },
  ),
);

export default useMyStore;
