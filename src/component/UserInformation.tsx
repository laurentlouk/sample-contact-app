import { useState, memo, useContext } from "react";
import type { FC } from "react";
import { IconButton } from "./IconButton";
import { User } from "../hooks/useUsers";
import { Flex } from "./styles/Flex.styled";
import { Panel } from "./styles/Panel.styled";
import { ThemeContext } from "../context/theme";

type UserInformationProps = User & {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  email: string;
  website: string;
};

const UserInformationComponent: FC<UserInformationProps> = ({
  address,
  phone,
  email,
  website,
}) => {
  const { theme } = useContext(ThemeContext);
  const [hoverInfo, setHoverInfo] = useState("");
  const formattedAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

  return (
    <>
      <Flex $gap="10%" $align="center" $justify="center">
        <IconButton
          $transparent
          name="MdLocationOn"
          size={25}
          aria-label="Location"
          color={theme.colors.text}
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${address.geo.lat},${address.geo.lng}`,
              "_blank"
            )
          }
          onMouseEnter={() => setHoverInfo(formattedAddress)}
        />
        <IconButton
          $transparent
          name="FaPhone"
          size={25}
          aria-label="Phone"
          color={theme.colors.text}
          onClick={() => window.open(`tel:${phone}`, "_self")}
          onMouseEnter={() => setHoverInfo(phone)}
        />
        <IconButton
          $transparent
          name="MdEmail"
          size={25}
          aria-label="Email"
          color={theme.colors.text}
          onClick={() =>
            window.open(
              `mailto:${email}?subject=Hello&body=Hi, I am interested in your services.`,
              "_self"
            )
          }
          onMouseEnter={() => setHoverInfo(`Email: ${email}`)}
        />
        <IconButton
          $transparent
          name="MdOutlineWeb"
          size={25}
          aria-label="Website"
          color={theme.colors.text}
          onClick={() => window.open(`https://${website}`, "_blank")}
          onMouseEnter={() => setHoverInfo(website)}
        />
      </Flex>
      <Panel>{hoverInfo || website}</Panel>
    </>
  );
};

export const UserInformation = memo(UserInformationComponent);
