import { Card, CardTitle, VisualEditorConfigurationSurface } from "@netlify/sdk/ui/react/components";

export const VisualEditorConfiguration = () => {
  return (
    <VisualEditorConfigurationSurface>
      <Card>
        <CardTitle>My Visual Editor Configuration</CardTitle>
        <p>Hello, world!</p>
      </Card>
    </VisualEditorConfigurationSurface>
  );
};
