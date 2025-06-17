import { CSSProperties, PropsWithChildren, useState } from "react";
import { Rating } from "../../components/ui/Rating/Rating";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";
import { Checkbox } from "../../components/ui/Checkbox/Checkbox";
import CustomRadio from "../../components/ui/Radio/Radio";
import BrutalToggle from "../../components/ui/Toggle/Toggle";
import BrutalSelect from "../../components/ui/Select/Select";
import Toggle from "../../components/ui/Toggle2/Toggle2";
import BrutalistSelect from "../../components/ui/Select2/Select2";
import { BrutalRadio } from "../../components/ui/Radio2/Radio2";
import { BrutalLabel } from "../../components/ui/Label/Label";
import BrutalistLabel from "../../components/ui/Label2/Label2";
import { BrutalAvatar } from "../../components/ui/Avatar/Avatar";
import BrutalBadgeCollection from "../../components/ui/Badge/Badge";
import BrutalDividerCollection from "../../components/ui/Divider/Divider";
import { BrutalProgressDemo } from "../../components/ui/Progress/ProgressDemo";
import BrutalSpinnerCollection from "../../components/ui/Spinner/Spinner";
import BrutalIconCollection from "../../components/ui/Icon/Icon";
import BrutalSliderExample from "../../components/ui/Slider/Slider";
import BrutalRatingExample from "../../components/ui/Rating2/Rating2";
import BrutalCardExample from "../../components/ui/Card/Card";
import BrutalAccordionExample from "../../components/ui/Accordion/Accordion";
import BrutalCarouselExample from "../../components/ui/Carousel/Carousel";
import BrutalBreadcrumbsExample from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BrutalTooltipExample from "../../components/ui/Tooltip/Tooltip";
import BrutalDateTimePickerExample from "../../components/ui/DateTimePicker/DateTimePicker";
import BrutalFileUploadExample from "../../components/ui/FileUpload/FileUpload";
import BrutalFABExample from "../../components/ui/ButtonFab/ButtonFab";
import BrutalButtonGroupExample from "../../components/ui/ButtonGroup/ButtonGroup";
import BrutalDropdownExample from "../../components/ui/Dropdown/Dropdown";
import BrutalNavBarExample from "../../components/ui/NavBar/NavBar";
import BrutalTabsExample from "../../components/ui/Tabs/Tabs";
import BrutalPaginationExample from "../../components/ui/Pagintaion/Pagintaion";
import BrutalStepperExample from "../../components/ui/Stepper/Stepper";
import BrutalSidebarExample from "../../components/ui/SideBar/Sidebar";
import BrutalAlertExample from "../../components/ui/Notification/Notification";
import BrutalModalExample from "../../components/ui/Modal/Modal";
import BrutalTableExample from "../../components/ui/Table/Table";
import BrutalListExample from "../../components/ui/List/List";
import BrutalTreeViewExample from "../../components/ui/Tree/Tree";
import BrutalContainerExample from "../../components/ui/Container/Container";
import BrutalGridExample from "../../components/ui/Grid/Grid";
import BrutalLinkExample from "../../components/ui/Link/Link";
import BrutalAutocompleteExample from "../../components/ui/Autocomplete/Autocomplete";

const styledGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  width: "50%",
  alignItems: "stretch",
} as CSSProperties;

function StyledGroup({ children }: PropsWithChildren) {
  return <div style={styledGroup}>{children}</div>;
}

export function HomePage() {
  const [value, setValue] = useState(0);

  useLocalStorage("rating", (data) => {
    const rating = +data;
    setValue(rating);
    return data;
  });

  const onSetValue = (val: number) => {
    setValue(val);
    localStorage.setItem("rating", val.toString());
  };

  return (
    <>
      <h3>Buttons</h3>
      <StyledGroup>
        <Button status="primary">Primary</Button>
        <Button status="secondary">Secondary</Button>
        <Button status="warning">Warning</Button>
        <Button status="danger">Danger</Button>
      </StyledGroup>
      <br></br>
      <h3>Inputs</h3>
      <StyledGroup>
        <Input></Input>
      </StyledGroup>
      <br></br>
      <h3>Checkbox</h3>
      <StyledGroup>
        <Checkbox>You can check it</Checkbox>
      </StyledGroup>
      <br></br>
      <h3>Radio</h3>
      <StyledGroup>
        <CustomRadio
          options={[
            {
              value: 1,
              label: "123",
            },
            {
              value: 2,
              label: "123123",
            },
            {
              value: 3,
              label: "123asd",
            },
          ]}
          name="text"
        ></CustomRadio>
      </StyledGroup>
      <br></br>

      <h3>Radio 2</h3>
      <StyledGroup>
        <BrutalRadio
          options={[
            {
              value: 1,
              label: "123",
            },
            {
              value: 2,
              label: "123123",
            },
            {
              value: 3,
              label: "123asd",
            },
          ]}
          name="text"
        ></BrutalRadio>
      </StyledGroup>
      <br></br>
      <h3>Toggle</h3>
      <StyledGroup>
        <BrutalToggle></BrutalToggle>
      </StyledGroup>
      <br></br>
      <h3>Toggle 2</h3>
      <StyledGroup>
        <Toggle></Toggle>
      </StyledGroup>
      <br></br>
      <h3>Select</h3>
      <StyledGroup>
        <BrutalSelect
          options={[
            { value: "brutal", label: "BRUTAL MODE" },
            { value: "raw", label: "RAW DESIGN" },
            { value: "unstyled", label: "UNSTYLED" },
            { value: "punk", label: "PUNK WEB" },
          ]}
        ></BrutalSelect>
      </StyledGroup>
      <br></br>
      <h3>Select 2</h3>
      <StyledGroup>
        <BrutalistSelect
          options={[
            { value: "brutal", label: "BRUTAL MODE" },
            { value: "raw", label: "RAW DESIGN" },
            { value: "unstyled", label: "UNSTYLED" },
            { value: "punk", label: "PUNK WEB" },
          ]}
        ></BrutalistSelect>
      </StyledGroup>
      <h3>Label</h3>
      <StyledGroup>
        <BrutalLabel>Text</BrutalLabel>
      </StyledGroup>
      <br></br>
      <h3>Label 2</h3>
      <StyledGroup>
        <BrutalistLabel>Text</BrutalistLabel>
      </StyledGroup>

      <br></br>
      <h3>Avatar</h3>
      <StyledGroup>
        <BrutalAvatar></BrutalAvatar>
      </StyledGroup>

      <br></br>
      <h3>Badge</h3>
      <StyledGroup>
        <BrutalBadgeCollection></BrutalBadgeCollection>
      </StyledGroup>

      <br></br>
      <h3>Divider</h3>
      <StyledGroup>
        <BrutalDividerCollection></BrutalDividerCollection>
      </StyledGroup>

      <br></br>
      <h3>Progress</h3>
      <StyledGroup>
        <BrutalProgressDemo></BrutalProgressDemo>
      </StyledGroup>

      <br></br>
      <h3>Spinner</h3>
      <StyledGroup>
        <BrutalSpinnerCollection></BrutalSpinnerCollection>
      </StyledGroup>

      <br></br>
      <h3>Icon</h3>
      <StyledGroup>
        <BrutalIconCollection></BrutalIconCollection>
      </StyledGroup>

      <br></br>
      <h3>Slider</h3>
      <StyledGroup>
        <BrutalSliderExample></BrutalSliderExample>
      </StyledGroup>

      <br></br>
      <h3>Rating</h3>
      <StyledGroup>
        <BrutalRatingExample></BrutalRatingExample>
      </StyledGroup>

      <br></br>
      <h3>Card</h3>
      <StyledGroup>
        <BrutalCardExample></BrutalCardExample>
      </StyledGroup>

      <br></br>
      <h3>Accordion</h3>
      <StyledGroup>
        <BrutalAccordionExample></BrutalAccordionExample>
      </StyledGroup>

      <br></br>
      <h3>Carousel</h3>
      <StyledGroup>
        <BrutalCarouselExample></BrutalCarouselExample>
      </StyledGroup>

      <br></br>
      <h3>Breadcrumbs</h3>
      <StyledGroup>
        <BrutalBreadcrumbsExample></BrutalBreadcrumbsExample>
      </StyledGroup>

      <br></br>
      <h3>Tooltip</h3>
      <StyledGroup>
        <BrutalTooltipExample></BrutalTooltipExample>
      </StyledGroup>

      <br></br>
      <h3>DateTimePicker</h3>
      <StyledGroup>
        <BrutalDateTimePickerExample></BrutalDateTimePickerExample>
      </StyledGroup>

      <br></br>
      <h3>FileUpload</h3>
      <StyledGroup>
        <BrutalFileUploadExample></BrutalFileUploadExample>
      </StyledGroup>

      <br></br>
      <h3>FAB button</h3>
      <StyledGroup>
        <BrutalFABExample></BrutalFABExample>
      </StyledGroup>

      <br></br>
      <h3>Button Group</h3>
      <StyledGroup>
        <BrutalButtonGroupExample></BrutalButtonGroupExample>
      </StyledGroup>

      <br></br>
      <h3>Dropdown</h3>
      <StyledGroup>
        <BrutalDropdownExample></BrutalDropdownExample>
      </StyledGroup>

      <br></br>
      <h3>NavBar</h3>
      <StyledGroup>
        <BrutalNavBarExample></BrutalNavBarExample>
      </StyledGroup>

      <br></br>
      <h3>Rating</h3>
      <Rating amount={10} value={value} onValueChange={onSetValue}></Rating>

      <br></br>
      <h3>NavBar</h3>
      <StyledGroup>
        <BrutalTabsExample></BrutalTabsExample>
      </StyledGroup>

      <br></br>
      <h3>Pagination</h3>
      <StyledGroup>
        <BrutalPaginationExample></BrutalPaginationExample>
      </StyledGroup>

      <br></br>
      <h3>Stepper</h3>
      <StyledGroup>
        <BrutalStepperExample></BrutalStepperExample>
      </StyledGroup>

      <br></br>
      <h3>Sidebar</h3>
      <StyledGroup>
        <BrutalSidebarExample></BrutalSidebarExample>
      </StyledGroup>

      <br></br>
      <h3>Notification</h3>
      <StyledGroup>
        <BrutalAlertExample></BrutalAlertExample>
      </StyledGroup>

      <br></br>
      <h3>Modal</h3>
      <StyledGroup>
        <BrutalModalExample></BrutalModalExample>
      </StyledGroup>

      <br></br>
      <h3>Table</h3>
      <StyledGroup>
        <BrutalTableExample></BrutalTableExample>
      </StyledGroup>

      <br></br>
      <h3>List</h3>
      <StyledGroup>
        <BrutalListExample></BrutalListExample>
      </StyledGroup>

      <br></br>
      <h3>Tree</h3>
      <StyledGroup>
        <BrutalTreeViewExample></BrutalTreeViewExample>
      </StyledGroup>

      <br></br>
      <h3>Tree</h3>
      <StyledGroup>
        <BrutalContainerExample></BrutalContainerExample>
      </StyledGroup>

      <br></br>
      <h3>Grid</h3>
      <StyledGroup>
        <BrutalGridExample></BrutalGridExample>
      </StyledGroup>

      <br></br>
      <h3>Link</h3>
      <StyledGroup>
        <BrutalLinkExample></BrutalLinkExample>
      </StyledGroup>

      <br></br>
      <h3>Autocomplete</h3>
      <StyledGroup>
        <BrutalAutocompleteExample></BrutalAutocompleteExample>
      </StyledGroup>
    </>
  );
}
