"use client";
import { hexToHsl } from "@/lib/utils";
import { configAtom } from "@/store/auth.store";
import { IConfig } from "@/types/auth.types";
import { useSetAtom } from "jotai";
import { useLayoutEffect } from "react";

const ConfigProvider = ({
  children,
  config,
}: React.PropsWithChildren & { config: IConfig }) => {
  const setConfig = useSetAtom(configAtom);
  const { erxesAppToken, paymentIds, name, checkRemainder, deliveryConfig } =
    config;

  useLayoutEffect(() => {
    setConfig({
      erxesAppToken,
      paymentIds,
      name,
      checkRemainder,
      deliveryConfig,
    });
  }, [erxesAppToken, paymentIds, name, checkRemainder, deliveryConfig]);

  return <>{children}</>;
};

export default ConfigProvider;
