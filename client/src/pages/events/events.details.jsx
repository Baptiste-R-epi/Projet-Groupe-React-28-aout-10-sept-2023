import Navbar from "components/layouts/layout.navBar";
import { Box } from "components/styled/styled.box";
import { CardArticle } from "components/styled/styled.cardArticle";
import { CardImage } from "components/styled/styled.cardImage";
import { Spinner } from "components/styled/styled.spinner";
import { H1, H2 } from "components/styled/styled.title";
import { getOne } from "queries/queries.event";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import placeholderImage from "assets/images/placeholder.svg";
import { DateDisplay } from "components/styled/styled.dateDisplay";
import { FullContainer } from "components/styled/styled.fullContainer";
import { useEffect, useState } from "react";
import { ReactComponent as Pin } from "assets/images/pin.svg";
import { ReactComponent as Calendar } from "assets/images/calendar.svg";
import { TooltipBox, TooltipCard } from "components/styled/styled.tooltip";
import { Divider } from "components/misc/misc.divider";
import { Button } from "components/button/button.button";
import { TextContainer } from "components/styled/styled.textContainer";

export const EventDetails = () => {
	const uid = useParams().uid;
	const { data, isError, isLoading } = useQuery(["eventApiGetOne", uid], () =>
		getOne(uid)
	);
	const [fields, setFields] = useState({
		title_fr: "",
		image: "",
		location_imagecredits: "",
		daterange_fr: "",
		longdescription_fr: "",
		location_address: "",
		location_coordinates: { lat: 0, lng: 0 },
		location_city: "",
		location_department: "",
		location_region: "",
		firstdate_begin: "",
	});

	useEffect(() => {
		if (data) {
			const {
				title_fr,
				image,
				location_imagecredits,
				daterange_fr,
				longdescription_fr,
				location_address,
				location_city,
				location_coordinates,
				location_department,
				location_region,
				firstdate_begin,
			} = data.results[0];
			setFields({
				title_fr,
				image,
				location_imagecredits,
				daterange_fr,
				longdescription_fr,
				location_address,
				location_coordinates,
				location_city,
				location_department,
				location_region,
				firstdate_begin,
			});
		}
	}, [data]);

	if (isLoading) {
		return (
			<>
				<Spinner />
			</>
		);
	}

	if (isError) {
		return (
			<Box>
				<Navbar />
				<H1>Une erreur est survenue</H1>
			</Box>
		);
	}

	const handleClick = () => { };

	return (
		<>
			<Box>
				<Navbar />
			</Box>
			<Divider />
			<FullContainer>
				<CardArticle>
					<Box justifycontentstart="true">
						<CardImage
							src={fields.image ?? placeholderImage}
							alt={fields.location_imagecredits ?? "image de l'évènement"}
							style={{ margin: "0 1rem 0 3rem" }}
						/>
						<Box
							flexdirectioncolumn="true"
							justifycontentstart="true"
							alignitems="start"
						>
							<div style={{display: "flex", alignItems: "center"}}>

								<p
									dangerouslySetInnerHTML={{
										__html:
											"<H1>Date  " +
											fields.daterange_fr +
											" " +
											fields.firstdate_begin.slice(0, 10).replaceAll("-", "/") +
											"</H1>",
									}}
								></p>
								<Calendar />
							</div>
							<TooltipCard>
								<H2>Lieu {fields.location_address}</H2>
								<Pin />
								<TooltipBox position="top">
									<p
										dangerouslySetInnerHTML={{
											__html: fields.location_city + "</H3>",
										}}
									></p>
								</TooltipBox>
							</TooltipCard>
							<Button onClick={handleClick}>Organiser une sortie</Button>
							<Box>
								<TextContainer>
									<p
										dangerouslySetInnerHTML={{
											__html: fields.longdescription_fr,
										}}
									></p>
								</TextContainer>
							</Box>
						</Box>
					</Box>
				</CardArticle>
			</FullContainer>
		</>
	);
};

/**
 * <FullContainer>
		<CardArticle flexdirectioncolumn="true">
		  <Box justifycontentstart="true">
			<CardImage
			  src={fields.image ?? placeholderImage}
			  alt={fields.location_imagecredits ?? "image de l'évènement"}
			/>
			<DateDisplay>
			  <p
				dangerouslySetInnerHTML={{
				  __html: "<H1>Date  " + fields.daterange_fr + "</H1>",
				}}
			  ></p>
			  <Calendar />
			  <TooltipCard>
			  <H2>Lieu {fields.location_address}</H2>
			  <Pin />
			  <TooltipBox position="top">
				<p
				  dangerouslySetInnerHTML={{
					__html: fields.location_city + "</H3>",
				  }}
				></p>
			  </TooltipBox>
			</TooltipCard>
			  
			</DateDisplay>
		  </Box>
		  <Box display="block">
		    
			<TextContainer>
			  <p dangerouslySetInnerHTML={{ __html: fields.longdescription_fr }}></p>
			</TextContainer>
		  </Box>
		</CardArticle>
	  </FullContainer>
 */
