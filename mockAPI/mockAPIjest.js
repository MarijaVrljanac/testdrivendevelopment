import axios from "axios";

import { BASE_URL, fetchCountries } from "./mockAPI";

//mock axios
jest.mock("axios");

describe("fetchCountries", () => {
  describe("when API call is successful", () => {
    it("should return countries list", async () => {
      // given
      const countries = [
        { country:[
        { country_id: "GH", probability: 0.224 },
        { country_id: "PH", probability: 0.084 },
        { country_id: "NG", probability: 0.073 },
        { country_id: "US", probability: 0.061 },
        { country_id: "NE", probability: 0.034 }],
          name: "nathaniel"}
        ];
      // Create a sample response and make mocked axios instance return it
      // We are testing GET request, so we use axios.get for mocking the response
      // If we were testing POST, axios.post should be used
      axios.get.mockResolvedValueOnce(countries);

      // Call the function you are testing 
      // when
      const result = await fetchCountries();

      //Confirm that the request was sent to the correct endpoint and that the correct result is returned
      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/countries`);
      expect(result).toEqual(countries);
    });
  });

  describe("when API call fails", () => {
    it("should return empty countries list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchCountries();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/countries`);
      expect(result).toEqual([]);
    });
  });
});