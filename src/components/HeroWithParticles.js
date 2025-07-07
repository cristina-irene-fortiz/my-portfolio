// src/components/HeroWithSparkles.js  (rename to HeroWithParticles.js)

export default function HeroWithParticles() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 8 }
      }}
    >
      {/* Sparkles overlay */}
      <Sparkles
        color="#ff41b5"        // your pink
        count={30}             // how many at once
        minSize={8}
        maxSize={16}
        fadeOutSpeed={20}
        flicker={true}
        overflowPx={50}        // allow them to drift a bit outside
        style={{ zIndex: 1 }}  // make sure they sit *above* background but *below* text
      />
+     {/* Particle storm overlay */}
+     <ParticleStorm />

      {/* Actual content sits above z-index 1 */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ position: 'relative', zIndex: 2 }}
      >
        {/* …your Greeting, Title, Button, Image */}
      </Grid>
    </Box>
  );
}
