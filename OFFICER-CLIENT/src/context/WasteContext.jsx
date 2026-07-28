import { createContext, useState } from "react";
import householdsData from "../data/households";
import collectionsData from "../data/collections";

export const WasteContext = createContext();

export function WasteProvider({ children }) {
  const [households, setHouseholds] = useState(householdsData);
  const [collections, setCollections] = useState(collectionsData);

  // Add a new collection record
  const addCollection = (record) => {
    // Add collection history
    setCollections((prevCollections) => [record, ...prevCollections]);

    // Update reward and penalty points
    setHouseholds((prevHouseholds) =>
      prevHouseholds.map((house) => {
        if (house.id !== record.householdId) {
          return house;
        }

        let reward = house.rewardPoints;
        let penalty = house.penaltyPoints;

        switch (record.status) {
          case "Properly Segregated":
            reward += 10;
            break;

          case "Wet Waste Only":
            reward += 5;
            break;

          case "Dry Waste Only":
            reward += 5;
            break;

          case "Mixed Waste":
            penalty += 10;
            break;

          case "No Waste Given":
            // No reward and no penalty
            break;

          case "House Locked":
            // No reward and no penalty
            break;

          default:
            break;
        }

        return {
          ...house,
          rewardPoints: reward,
          penaltyPoints: penalty,
        };
      })
    );
  };

  return (
    <WasteContext.Provider
      value={{
        households,
        collections,
        addCollection,
      }}
    >
      {children}
    </WasteContext.Provider>
  );
}