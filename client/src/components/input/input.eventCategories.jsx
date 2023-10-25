import { Button } from "components/button/button.button";
import { Divider } from "components/misc/misc.divider";
import { Box } from "components/styled/styled.box";
import { TextInput } from "components/styled/styled.inputText";
import { SelectCategories } from "components/styled/styled.select";
import { H2 } from "components/styled/styled.title";
import { useState, useRef } from "react";
import categories from "utils/Categories_map";

export const EventCategoriesInput = ({ APIrequestSet, APILocationSet }) => {
  const [category, setCategory] = useState("--Catégorie--");
  const sub_categorie_select = useRef(null);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmitSubCategory = (e) => {
    e.preventDefault();
    const location = document.getElementById("location").value;
    // console.log(categories[category][sub_categorie_select.current.value].APIwhere);
    APIrequestSet(
      categories[category][sub_categorie_select.current.value].APIwhere
    );
    APILocationSet(location !== "" ? location : null);
  };

  return (
    <Box
      flexdirectioncolumn="true"
      justifycontentcenter="true"
      justifycontentstart="true"
      width="100%"
    >
      <Divider />
      <H2>Filtres</H2>
      <Divider />
      <form action="">
        <SelectCategories
          name="categories"
          id="categories"
          onChange={handleChangeCategory}
          style={{ width: "100%" }}
        >
          {Object.keys(categories).map((category_name) => (
            <option key={category_name} value={category_name}>
              {category_name}
            </option>
          ))}
        </SelectCategories>
        <Divider />
        <SelectCategories
          name="sub-categories"
          ref={sub_categorie_select}
          id="sub-categories"
          style={{ width: "100%" }}
        >
          {Object.keys(categories[category]).map((sub_category_name) => (
            <option key={sub_category_name} value={sub_category_name}>
              {sub_category_name}
            </option>
          ))}
        </SelectCategories>
        <Divider />
        <TextInput
          id="location"
          name="location"
          type="text"
          placeholder="Lieu précis"
        />
        <Button type="submit" onClick={handleSubmitSubCategory}>
          Rechercher
        </Button>
      </form>
    </Box>
  );
};
