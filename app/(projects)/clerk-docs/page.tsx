import { Box } from "@/components/grid/Box";
import { Grid } from "@/components/grid/Grid";
import { Image } from "@/components/grid/Image";
import { Text } from "@/components/grid/Text";
import { Section } from "@/components/grid/Section";

import PNG_clerkDocsHomepage from "./images/clerk-docs-homepage.png";

export default function ClerkDocs() {
  return (
    <Grid>
      <Section>
        <Box rotate={5} angle={0} offset={0}>
          <Image
            src={PNG_clerkDocsHomepage}
            alt="Clerk.com/docs homepage"
            size={0.22}
          />
        </Box>
        <Box rotate={-15} angle={235} offset={475}>
          <Text type="title">Clerk Authentication Documentation</Text>
        </Box>
      </Section>
    </Grid>
  );
}
