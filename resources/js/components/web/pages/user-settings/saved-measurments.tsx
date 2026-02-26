import { useState, type JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldTitle } from '@/components/ui/field';
import { Slider } from '@/components/ui/slider';

export default function SavedMeasurments(): JSX.Element {
    const [height, setHeight] = useState([162]);
    const [waist, setWaist] = useState([60]);
    const [chest, setChest] = useState([67]);
    const [shoulderWidth, setShoulderWidth] = useState([80]);

    return (
        <section>
            <h2 className="text-2xl/tight font-bold">Saved Measurement</h2>

            <div className="mt-6 flex flex-col gap-10">
                <div>
                    <div className="flex justify-between gap-10">
                        <div className="max-w-xl flex-1">
                            <Field>
                                <FieldTitle className="text-sm font-normal">
                                    <span>
                                        Height <span className="font-medium text-brand-primary-400">{height[0]}</span>cm
                                    </span>
                                </FieldTitle>

                                <Slider
                                    className="mt-1 w-full"
                                    value={height}
                                    onValueChange={setHeight}
                                    max={220}
                                    min={40}
                                    step={1}
                                />
                            </Field>
                        </div>

                        <div className="max-w-xl flex-1">
                            <Field>
                                <FieldTitle className="text-sm font-normal">
                                    <span>
                                        Waist <span className="font-medium text-brand-primary-400">{waist[0]}</span>cm
                                    </span>
                                </FieldTitle>

                                <Slider
                                    className="mt-1 w-full"
                                    value={waist}
                                    onValueChange={setWaist}
                                    max={220}
                                    min={40}
                                    step={1}
                                />
                            </Field>
                        </div>
                    </div>

                    <div className="mt-9 flex justify-between gap-10">
                        <div className="max-w-xl flex-1">
                            <Field>
                                <FieldTitle className="text-sm font-normal">
                                    <span>
                                        Chest <span className="font-medium text-brand-primary-400">{chest[0]}</span>cm
                                    </span>
                                </FieldTitle>

                                <Slider
                                    className="mt-1 w-full"
                                    value={chest}
                                    onValueChange={setChest}
                                    max={220}
                                    min={40}
                                    step={1}
                                />
                            </Field>
                        </div>

                        <div className="max-w-xl flex-1">
                            <Field>
                                <FieldTitle className="text-sm font-normal">
                                    <span>
                                        Shoulder width <span className="font-medium text-brand-primary-400">{shoulderWidth[0]}</span>
                                        cm
                                    </span>
                                </FieldTitle>

                                <Slider
                                    className="mt-1 w-full"
                                    value={shoulderWidth}
                                    onValueChange={setShoulderWidth}
                                    max={220}
                                    min={40}
                                    step={1}
                                />
                            </Field>
                        </div>
                    </div>
                </div>

                <Button
                    className="ml-auto text-black hover:bg-brand-secondary-300/80"
                    size="interactions"
                    variant="secondary"
                >
                    Save
                </Button>
            </div>
        </section>
    );
}
